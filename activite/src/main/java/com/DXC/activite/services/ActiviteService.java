package com.DXC.activite.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActiviteService {
    private final com.DXC.activite.repository.ActiviteRepository activiteRepository;

    @Autowired
    public ActiviteService(com.DXC.activite.repository.ActiviteRepository activiteRepository) {
        this.activiteRepository = activiteRepository;
    }

    public List<com.DXC.activite.models.Activite> getActivite() {
        return this.activiteRepository.findAll();
    }

    public com.DXC.activite.models.Activite getActiviteByID(Integer id) {
        return activiteRepository.findById(id).orElse(null);
    }
    public void addActivite(com.DXC.activite.models.Activite activite) {
        Optional<com.DXC.activite.models.Activite> optionalActivite = activiteRepository.findByNomActivite(activite.getNomActivite());
        if (optionalActivite.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        activiteRepository.save(activite);
    }
    public com.DXC.activite.models.Activite updateActivite(com.DXC.activite.models.Activite activite) {
        com.DXC.activite.models.Activite existingActivite = activiteRepository.findById(activite.getId()).orElse(null);
        existingActivite.setNomActivite(activite.getNomActivite());
        existingActivite.setTypeActivite(activite.getTypeActivite());
        existingActivite.setDescription(activite.getDescription());
        existingActivite.setCategorie(activite.getCategorie());
<<<<<<< HEAD
=======
        existingActivite.setStatus(activite.getStatus());
        existingActivite.setDateDebut(activite.getDateDebut());
        existingActivite.setDateFin(activite.getDateFin());
        existingActivite.setIdPrestation(activite.getIdPrestation());
>>>>>>> e270f320e3b3e24ee000c8ae2c148372b9ee49d1
        existingActivite.setStatus(activite.getStatus());
        existingActivite.setDateDebut(activite.getDateDebut());
        existingActivite.setDateFin(activite.getDateFin());
        existingActivite.setIdPrestation(activite.getIdPrestation());
        return activiteRepository.save(existingActivite);
    }
}
