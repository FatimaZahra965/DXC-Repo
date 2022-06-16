package com.dxc.certifications.controller;



import com.dxc.certifications.entity.certificat;
import com.dxc.certifications.service.certficat_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dxc/certifications")
@CrossOrigin(origins = "*")


public class certificat_controller {
    @Autowired
    certficat_service service;

    @PostMapping("/addcertif")
    public certificat ajouter_certif(@RequestBody certificat certif){
        return service.ajout_certif(certif);
    }

    @PostMapping("/valider/{id}")
    public boolean valider_certif(@PathVariable int id){
        return service.valider(id);
    }

    @PostMapping("/refuser/{id}")
    public boolean refuser_certif(@PathVariable int id){

        return service.refus(id);
    }

    @GetMapping("/certificats/{id}")
    public List<certificat> afficher_mes_certif(@PathVariable String id){
        return service.affichermescertif(id);
    }

    @GetMapping("/certificat/{id}/{idcertif}")
    public certificat afficher_certif(@PathVariable String id,@PathVariable int idcertif){
        return service.affichercertif(id,idcertif);
    }

    @DeleteMapping("/deletecertif/{id}")
    public boolean supprimer_certif(@PathVariable int id){

        return service.suppression(id);

    }

    @PutMapping("/updatecertif")
    public certificat mise_a_jour(@RequestBody certificat certif){

        return service.miseajour(certif);


    }


}
