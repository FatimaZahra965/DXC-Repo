package com.dxc.ressource.service;

import com.dxc.ressource.entity.Ressource;
import com.dxc.ressource.repository.RessourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RessourceService {
    @Autowired
    private RessourceRepo repo;

    public RessourceService(RessourceRepo repo) {
        this.repo = repo;
    }


    public Ressource ajout_ressource(Ressource ressource) {
        return repo.save(ressource);
    }




    /*public List<Ressource> ajout_ressources(List<Ressource> ressources) {
        return repo.saveAll(ressources);
    }*/

    public List<Ressource> afficher_ressources() {
        return (List<Ressource>) repo.findAll();
    }

    public List<Ressource> afficher_ressource_acct(Integer idAcct) {

        return repo.getRessurceOfActivité(idAcct);
    }

    public List<Ressource> afficher_ressource_capabilite(Integer idCapabilite) {
        return repo.getRessurceOfCapabilite(idCapabilite);
    }

    public Ressource afficher_ressource(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public boolean supprimer_ressource(Integer id) {
        repo.deleteById(id);
        return true;

    }

    public Ressource miseajour_ressource(Ressource ressource) {
        Ressource ressourceexist = repo.findById(ressource.getMatricule()).orElse(null);
        ressourceexist.setFirstname(ressource.getFirstname());
        ressourceexist.setLastname(ressource.getLastname());
        ressourceexist.setDatenaissance(ressource.getDatenaissance());
        ressourceexist.setTypeRessource(ressource.getTypeRessource());
        ressourceexist.setGenre(ressource.getGenre());
        return repo.save(ressourceexist);
    }

}
