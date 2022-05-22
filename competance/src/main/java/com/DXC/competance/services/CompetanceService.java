package com.DXC.competance.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompetanceService {
    private final com.DXC.competance.repository.CompetanceRepository competanceRepository;

    @Autowired
    public CompetanceService(com.DXC.competance.repository.CompetanceRepository competanceRepository) {
        this.competanceRepository = competanceRepository;
    }

    public List<com.DXC.competance.models.Competance> getCompetance() {
        return this.competanceRepository.findAll();
    }


    public com.DXC.competance.models.Competance getCompetanceByID(Integer id) {
        return competanceRepository.findById(id).orElse(null);
    }
    public com.DXC.competance.models.Competance getCompetanceByTypeComp(String typeComp) {
        return competanceRepository.findByTypeComp(typeComp);
    }
    public void addCompetance(com.DXC.competance.models.Competance competance) {
        Optional<com.DXC.competance.models.Competance> optionalCompetance = competanceRepository.findCompetanceByNomCompetance(competance.getNomCompetance());
        if (optionalCompetance.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        competanceRepository.save(competance);
    }
    public com.DXC.competance.models.Competance updateCompetance(com.DXC.competance.models.Competance competance) {
        com.DXC.competance.models.Competance existingCompetance = competanceRepository.findById(competance.getId()).orElse(null);
        existingCompetance.setNomCompetance(competance.getNomCompetance());
        existingCompetance.setMatriculeRessource(competance.getMatriculeRessource());
        existingCompetance.setEvaluationManager(competance.getEvaluationManager());
        existingCompetance.setTypeComp(competance.getTypeComp());
        existingCompetance.setNomRessource(competance.getNomRessource());
        existingCompetance.setNiveau(competance.getNiveau());

        return competanceRepository.save(existingCompetance);
    }
}
