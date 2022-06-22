package com.dxc.ressource.service;


import com.dxc.ressource.entity.ressource;
import com.dxc.ressource.repository.ressource_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class ressource_service {
    @Autowired
    private ressource_repo repo;



    public ressource ajout_ressource(ressource ressource){
        return repo.save(ressource);
    }

    public List<ressource> ajout_ressources( List<ressource>  ressources){
        return repo.saveAll(ressources);
    }

    public List<ressource> afficher_ressource(){
        return  repo.findAll();
    }

    public List<ressource> afficher_ressource_acct(Integer idAcct){
        return  repo.getRessurceOfActivité(idAcct);
    }

    public ressource afficherbyid( Integer id){
        return repo.findById(id).orElse(null);
    }
    public boolean suppression( Integer id){
        repo.deleteById(id);
        return true;

    }

    public ressource miseajour( ressource ressource){
        ressource ressourceexist=repo.findById(ressource.getMatricule()).orElse(null);
        ressourceexist.setFirstName(ressource.getFirstName());
        ressourceexist.setLastName(ressource.getLastName());
        ressourceexist.setStatus(ressource.getStatus());
        ressourceexist.setProfil(ressource.getProfil());
        ressourceexist.setDateNaissance(ressource.getDateNaissance());
        ressourceexist.setDateAmbauche(ressource.getDateAmbauche());
        return repo.save(ressourceexist);


    }







}
