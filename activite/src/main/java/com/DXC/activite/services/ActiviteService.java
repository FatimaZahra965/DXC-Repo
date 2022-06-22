package com.DXC.activite.services;

import com.DXC.activite.models.Activite;
import com.DXC.activite.models.RessourceActivities;
import com.DXC.activite.models.Ressources;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ActiviteService {
    private final com.DXC.activite.repository.ActiviteRepository activiteRepository;
    private final com.DXC.activite.repository.RessourceActivitiesRepository ressourceActivitiesRepository;

    public List<com.DXC.activite.models.Activite> getNoAffectedActivites() {
        return this.activiteRepository.findActivitiesEn();
    }

    public List<com.DXC.activite.models.Activite> getPrestationActivites(Integer prestation) {
        return this.activiteRepository.getPrestationActivites(prestation);
    }

    public List<com.DXC.activite.models.Activite> getActivite() {
        return this.activiteRepository.findAll();
    }

    public com.DXC.activite.models.Activite getActiviteByID(Integer id) {
        return activiteRepository.findById(id).orElse(null);
    }

    public void affectPrestation(Integer id, Integer prestation) {
        com.DXC.activite.models.Activite existingActivite = activiteRepository.findById(id).orElse(null);
        existingActivite.setFkPrestation(prestation);
        activiteRepository.save(existingActivite);
    }

    public void addActivite(com.DXC.activite.models.Activite activite, List<Integer> idRessources) {
        Optional<com.DXC.activite.models.Activite> optionalActivite = activiteRepository
                .findByNomActivite(activite.getNomActivite());
        if (optionalActivite.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        Activite savedActivite = activiteRepository.save(activite);
        idRessources.forEach(element -> {
            RessourceActivities newOne = new RessourceActivities();
            newOne.setId_activite(savedActivite.getId());
            newOne.setId_ressource(element);
            ressourceActivitiesRepository.save(newOne);
        });

    }

    public com.DXC.activite.models.Activite updateActivite(com.DXC.activite.models.Activite activite) {
        com.DXC.activite.models.Activite existingActivite = activiteRepository.findById(activite.getId()).orElse(null);
        existingActivite.setNomActivite(activite.getNomActivite());
        existingActivite.setTypeActivite(activite.getTypeActivite());
        existingActivite.setDescription(activite.getDescription());
        existingActivite.setCategorie(activite.getCategorie());
        existingActivite.setStatus(activite.getStatus());
        existingActivite.setDateDebut(activite.getDateDebut());
        existingActivite.setDateFin(activite.getDateFin());
        return activiteRepository.save(existingActivite);
    }
}
