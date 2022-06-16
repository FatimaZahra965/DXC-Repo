package com.dxc.ressource.controller;



import com.dxc.ressource.entity.ressource;
import com.dxc.ressource.service.ressource_service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DXC")
<<<<<<< HEAD
@CrossOrigin(origins = "*")
=======
@CrossOrigin(origins = "http://localhost:3000")
>>>>>>> abdelhadi
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

<<<<<<< HEAD
    @GetMapping("/ressource/{matricule}")
    public ressource afficherbyid(@PathVariable String matricule){
        return service.afficherbyid(matricule);
    }

    @DeleteMapping("/delete/{matricule}")
    public boolean suppression(@PathVariable String matricule){
       return service.suppression(matricule);
=======
    @GetMapping("/ressource/{id}")
    public ressource afficherbyid(@PathVariable Integer id){
        return service.afficherbyid(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean suppression(@PathVariable Integer id){
       return service.suppression(id);
>>>>>>> abdelhadi

    }
    @PutMapping("/update")
    public ressource miseajour(@RequestBody ressource ressource){

        return service.miseajour(ressource);


    }


}
