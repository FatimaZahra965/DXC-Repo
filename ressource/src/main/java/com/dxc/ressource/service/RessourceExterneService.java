package com.dxc.ressource.service;


import com.dxc.ressource.entity.Ressource;
import com.dxc.ressource.entity.RessourceExterne;
import com.dxc.ressource.repository.RessourceExterneRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RessourceExterneService {

    @Autowired
    private RessourceExterneRepo repo;

    public RessourceExterneService(RessourceExterneRepo repo) {
        this.repo = repo;
    }

    public RessourceExterne ajouter_ressource_externe(RessourceExterne ressource) {
        ressource.setTypeRessource("externe");
        return repo.save(ressource);
    }

    public List<RessourceExterne> afficher_ressources_externe() {
        return (List<RessourceExterne>) repo.findAll();
    }

    public RessourceExterne afficher_ressource_externe(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public boolean supprimer_ressource_externe(Integer id) {
        repo.deleteById(id);
        return true;

    }

    public RessourceExterne miseajour_ressource_externe(RessourceExterne ressource) {
        RessourceExterne ressourceexist = repo.findById(ressource.getMatricule()).orElse(null);
        ressourceexist.setFirstname(ressource.getFirstname());
        ressourceexist.setLastname(ressource.getLastname());
        ressourceexist.setDatenaissance(ressource.getDatenaissance());
        ressourceexist.setTypeRessource(ressource.getTypeRessource());
        ressourceexist.setGenre(ressource.getGenre());
        ressourceexist.setDateDebut(ressource.getDateDebut());
        ressourceexist.setDateFin(ressource.getDateFin());
        ressourceexist.setDescription(ressource.getDescription());
        return repo.save(ressourceexist);
    }


}
