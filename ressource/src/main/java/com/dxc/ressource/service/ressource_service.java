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

<<<<<<< HEAD
    public ressource afficherbyid( String matricule){
        return repo.findById(matricule).orElse(null);
    }
/*delate route */
    @DeleteMapping("/delete/{matricule}")
    public boolean suppression( String matricule){
        repo.deleteById(matricule);
=======
    public ressource afficherbyid( Integer id){
        return repo.findById(id).orElse(null);
    }
    public boolean suppression( Integer id){
        repo.deleteById(id);
>>>>>>> abdelhadi
        return true;

    }

    public ressource miseajour( ressource ressource){
        ressource ressourceexist=repo.findById(ressource.getMatricule()).orElse(null);
        ressourceexist.setFirstName(ressource.getFirstName());
        ressourceexist.setLastName(ressource.getLastName());
        ressourceexist.setStatus(ressource.getStatus());
        ressourceexist.setGenre(ressource.getGenre());
        ressourceexist.setDateNaissance(ressource.getDateNaissance());
        ressourceexist.setDateAmbauche(ressource.getDateAmbauche());
        return repo.save(ressourceexist);


    }







}
