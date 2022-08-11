package com.dxc.ressource.controller;

import com.dxc.ressource.entity.Ressource;
import com.dxc.ressource.entity.RessourceExterne;
import com.dxc.ressource.entity.RessourceInterne;
import com.dxc.ressource.service.RessourceExterneService;
import com.dxc.ressource.service.RessourceInterneService;
import com.dxc.ressource.service.RessourceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DXC")
@CrossOrigin(origins = "*")
public class RessourceController {
    @Autowired
    private RessourceService service;
    @Autowired
    private RessourceExterneService externeService;
    @Autowired
    private RessourceInterneService interneService;

    @PostMapping("/addRessource")
    public Ressource ajouter_ressource(@RequestBody Ressource ressource) {
        return service.ajout_ressource(ressource);
    }

    @PostMapping("/addRessourceExterne")
    public RessourceExterne ajouter_ressource_externe(@RequestBody RessourceExterne ressourceExterne) { return  externeService.ajouter_ressource_externe(ressourceExterne); }

    @PostMapping("/addRessourceInterne")
    public RessourceInterne ajouter_ressource_interne(@RequestBody RessourceInterne ressourceInterne) { return  interneService.ajouter_ressource_interne(ressourceInterne); }

    /*@PostMapping("/addRessources")
    public List<Ressource> ajouter_ressources(@RequestBody List<Ressource> ressources) {
        return service.ajout_ressources(ressources);
    }*/

    @GetMapping("/ressource")
    public List<Ressource> afficher_ressources() {
        return service.afficher_ressources();
    }

    @GetMapping("/ressource/externe")
    public List<RessourceExterne> afficher_ressources_externe() {
        return externeService.afficher_ressources_externe();
    }

    @GetMapping("/ressource/interne")
    public List<RessourceInterne> afficher_ressources_interne() {
        return interneService.afficher_ressources_interne();
    }


    /*@GetMapping("/ressource/act/{id}")
    public List<Ressource> afficher_ressource_acct(@PathVariable Integer id) {
        return service.afficher_ressource_acct(id);
    }



    @GetMapping("/ressource/capabilite/{id_capabilie}")
    public List<Ressource> afficher_ressource_capabilite(@PathVariable Integer id_capabilie) {
        return service.afficher_ressource_capabilite(id_capabilie);
    }*/

    @GetMapping("/ressource/{id}")
    public Ressource afficher_ressource(@PathVariable Integer id) {
        return service.afficher_ressource(id);
    }

    @GetMapping("/ressource/externe/{id}")
    public RessourceExterne afficher_ressource_externe(@PathVariable Integer id) {
        return (RessourceExterne) externeService.afficher_ressource_externe(id);
    }

    @GetMapping("/ressource/interne/{id}")
    public RessourceInterne afficher_ressource_interne(@PathVariable Integer id) {
        return (RessourceInterne) interneService.afficher_ressource_interne(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean supprimer_ressource(@PathVariable Integer id) {
        return service.supprimer_ressource(id);
    }

    @DeleteMapping("/delete/externe/{id}")
    public boolean supprimer_ressource_externe(@PathVariable Integer id) {
        return externeService.supprimer_ressource_externe(id);
    }

    @DeleteMapping("/delete/interne/{id}")
    public boolean supprimer_ressource_interne(@PathVariable Integer id) {
        return interneService.supprimer_ressource_interne(id);
    }



    @PutMapping("/update")
    public Ressource miseajour_ressource(@RequestBody Ressource ressource) {

        return service.miseajour_ressource(ressource);

    }

    @PutMapping("/update/externe")
    public RessourceExterne miseajour_ressource_externe(@RequestBody RessourceExterne ressource) {
        return externeService.miseajour_ressource_externe(ressource);
    }

    @PutMapping("/update/interne")
    public RessourceInterne miseajour_ressource_interne(@RequestBody RessourceInterne ressource) {
        return interneService.miseajour_ressource_interne(ressource);
    }

}
