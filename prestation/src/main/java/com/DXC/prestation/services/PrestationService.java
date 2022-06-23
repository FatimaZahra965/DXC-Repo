package com.DXC.prestation.services;

import com.DXC.prestation.models.Prestation;
import com.DXC.prestation.models.PrestationActivites;
import com.DXC.prestation.repository.PrestationActivitesRepository;
import com.DXC.prestation.repository.PrestationRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PrestationService {
    private final PrestationRepository prestationRepository;
    private final PrestationActivitesRepository prestationActivitesRepository;

    public List<Prestation> getPrestation() {
        return this.prestationRepository.findAll();
    }

    public Prestation getPrestationByID(Integer id) {
        return prestationRepository.findById(id).orElse(null);
    }

    public Prestation addPrestation(Prestation prestation) {
        Optional<Prestation> optionalPrestation = prestationRepository.findPrestationByTitre(prestation.getTitre());
        if (optionalPrestation.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        return prestationRepository.save(prestation);
    }

    public void affecterActivite(PrestationActivites presAct) {
        prestationActivitesRepository.save(presAct);
    }

    public List<PrestationActivites> getPrestationActiviteByID() {
        return prestationActivitesRepository.findAll();
    }

    public Prestation updatePrestation(Prestation prestation) {
        Prestation existingPrestation = prestationRepository.findById(prestation.getId()).orElse(null);
        existingPrestation.setTitre(prestation.getTitre());
        existingPrestation.setDateDebut(prestation.getDateDebut());
        existingPrestation.setDateFin(prestation.getDateFin());
        existingPrestation.setEtat(prestation.getEtat());
        existingPrestation.setMarket(prestation.getMarket());
        existingPrestation.setType(prestation.getType());
        existingPrestation.setIdActivite(prestation.getIdActivite());
        return prestationRepository.save(existingPrestation);
    }
}
