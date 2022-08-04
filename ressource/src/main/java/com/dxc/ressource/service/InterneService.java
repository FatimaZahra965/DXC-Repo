package com.dxc.ressource.service;

import com.dxc.ressource.model.Interne;
import com.dxc.ressource.repository.InterneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterneService {

    private InterneRepository interneRepository;
    @Autowired
    public InterneService(InterneRepository interneRepository) {
        this.interneRepository =  interneRepository;
    }

    public Interne addIntern(Interne ressource) {
        return interneRepository.save(ressource);
    }

    public List<Interne> addInterns(List<Interne> ressources) {
        return interneRepository.saveAll(ressources);
    }

    public List<Interne> getInterns() {
        return interneRepository.findAll();
    }

    public List<Interne> getActivityInterns(Integer idAcct) {
        return interneRepository.getRessurceOfActivité(idAcct);
    }

    public List<Interne> getCapabilityInterns(Integer idCapabilite) {
        return interneRepository.getRessurceOfCapabilite(idCapabilite);
    }

    public Interne getInternById(Long id) {
        return interneRepository.findById(id).orElse(null);
    }

    public boolean dropIntern(Long id) {
        interneRepository.deleteById(id);
        return true;

    }

    public Interne updateIntern(Interne ressource) {
        Interne existingIntern = interneRepository.findById(ressource.getMatricule()).orElse(null);
        existingIntern.setFirstname(ressource.getFirstname());
        existingIntern.setLastname(ressource.getLastname());
        existingIntern.setStatus(ressource.getStatus());
        existingIntern.setDatenaissance(ressource.getDatenaissance());
        existingIntern.setDateambauche(ressource.getDateambauche());
        existingIntern.setProfilefacturation(ressource.getProfilefacturation());
        existingIntern.setGenre(ressource.getGenre());
        return interneRepository.save(existingIntern);

    }
}
