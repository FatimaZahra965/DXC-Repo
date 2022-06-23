package com.dxc.ressource.controller;



import com.dxc.ressource.entity.ressource;
import com.dxc.ressource.service.ressource_service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DXC")
@CrossOrigin(origins = "*")
public class ressource_controller {
    @Autowired
    private ressource_service service;
    @PostMapping("/addRessource")
    public ressource ajouter_ressource(@RequestBody ressource ressource){
        return service.ajout_ressource(ressource);
    }

    @PostMapping("/addRessources")
    public List<ressource> ajouter_ressources(@RequestBody List<ressource>  ressources){
        return service.ajout_ressources(ressources);
    }
    @GetMapping("/ressource")
    public List<ressource> afficher_ressource(){
        return  service.afficher_ressource();
    }


    @GetMapping("/ressource/act/{id}")
    public List<ressource> afficher_ressource_acct(@PathVariable Integer id){
        return  service.afficher_ressource_acct(id);
    }

<<<<<<< Updated upstream
=======
    @GetMapping("/ressource/capabilite/{id_capabilie}")
    public List<ressource> afficher_ressource_capabilite(@PathVariable Integer id_capabilie){
        return  service.afficher_ressource_capabilite(id_capabilie);
    }

>>>>>>> Stashed changes
    @GetMapping("/ressource/{id}")
    public ressource afficherbyid(@PathVariable Integer id){
        return service.afficherbyid(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean suppression(@PathVariable Integer id){
       return service.suppression(id);

    }
    @PutMapping("/update")
    public ressource miseajour(@RequestBody ressource ressource){

        return service.miseajour(ressource);


    }


}
