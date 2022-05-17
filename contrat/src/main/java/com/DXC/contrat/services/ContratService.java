package com.DXC.contrat.services;
import com.DXC.contrat.models.Contrat;
import com.DXC.contrat.repository.ContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ContratService {
    private final ContratRepository contratRepository;

    @Autowired
    public ContratService(ContratRepository contratRepository) {
        this.contratRepository = contratRepository;
    }

    public List<Contrat> getContrat() {
        return this.contratRepository.findAll();
    }

    public void addContrat(Contrat contrat) {
        Optional<Contrat> optionalContrat = contratRepository.findContratByNomContrat(contrat.getNomContrat());
        if (optionalContrat.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        contratRepository.save(contrat);
    }
}
