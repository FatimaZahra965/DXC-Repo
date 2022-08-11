package com.dxc.ressource.service;


import com.dxc.ressource.entity.Ressource;
import com.dxc.ressource.entity.RessourceInterne;
import com.dxc.ressource.entity.RessourceInterne;
import com.dxc.ressource.repository.RessourceInterneRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RessourceInterneService {

    @Autowired
    private RessourceInterneRepo repo;

    public RessourceInterneService(RessourceInterneRepo repo) {
        this.repo = repo;
    }

    public RessourceInterne ajouter_ressource_interne(RessourceInterne ressource) {
        ressource.setTypeRessource("interne");
        return repo.save(ressource);
    }

    public List<RessourceInterne> afficher_ressources_interne() {
        return (List<RessourceInterne>) repo.findAll();
    }

    public RessourceInterne afficher_ressource_interne(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public boolean supprimer_ressource_interne(Integer id) {
        repo.deleteById(id);
        return true;

    }

    public RessourceInterne miseajour_ressource_interne(RessourceInterne ressource) {
        RessourceInterne ressourceexist = repo.findById(ressource.getMatricule()).orElse(null);
        ressourceexist.setFirstname(ressource.getFirstname());
        ressourceexist.setLastname(ressource.getLastname());
        ressourceexist.setDatenaissance(ressource.getDatenaissance());
        ressourceexist.setTypeRessource(ressource.getTypeRessource());
        ressourceexist.setGenre(ressource.getGenre());
        ressourceexist.setProfil(ressource.getProfil());
        ressourceexist.setDateEmbauche(ressource.getDateEmbauche());
        ressourceexist.setStatus(ressource.getStatus());
        return repo.save(ressourceexist);
    }
}
