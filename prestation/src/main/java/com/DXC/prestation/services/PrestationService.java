package com.DXC.prestation.services;
import com.DXC.prestation.models.Prestation;
import com.DXC.prestation.repository.PrestationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrestationService {
    private final PrestationRepository prestationRepository;

    @Autowired
    public PrestationService(PrestationRepository prestationRepository) {
        this.prestationRepository = prestationRepository;
    }

    public List<Prestation> getPrestation() {
        return this.prestationRepository.findAll();
    }

    public Prestation getPrestationByID(Integer id) {
        return prestationRepository.findById(id).orElse(null);
    }

    public void addPrestation(Prestation prestation) {
        Optional<Prestation> optionalPrestation = prestationRepository.findPrestationByTitre(prestation.getTitre());
        if (optionalPrestation.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        prestationRepository.save(prestation);
    }

    public Prestation updatePrestation(Prestation prestation) {
        Prestation existingPrestation = prestationRepository.findById(prestation.getId()).orElse(null);
        existingPrestation.setTitre(prestation.getTitre());
        existingPrestation.setDateDebut(prestation.getDateDebut());
        existingPrestation.setDateFin(prestation.getDateFin());
        existingPrestation.setEtat(prestation.getEtat());
        existingPrestation.setMarket(prestation.getMarket());
        existingPrestation.setType(prestation.getType());
        return prestationRepository.save(existingPrestation);
    }
}
