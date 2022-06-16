package com.DXC.prestation.controllers;

import com.DXC.prestation.models.Prestation;
import com.DXC.prestation.models.PrestationActivites;
import com.DXC.prestation.services.PrestationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "DXC/prestations")
@CrossOrigin(origins = "*")
public class PrestationController {
    private final PrestationService prestationService;

    @Autowired
    public PrestationController(PrestationService prestationService) {
        this.prestationService = prestationService;
    }

    @GetMapping(path = "allPrestations")
    public List<Prestation> getAllPrestations() {
        return this.prestationService.getPrestation();
    }

    @PostMapping(path = "addPrestation")
    public Prestation addPrestation(@RequestBody Prestation prestation) {
        return this.prestationService.addPrestation(prestation);
    }

    @PostMapping(path = "affecterActiviteToPrestation")

    public void AffecterActivite(@RequestBody PrestationActivites presAct) {
        this.prestationService.affecterActivite(presAct);
    }

    @GetMapping(path = "PrestationActivite")
    public List<PrestationActivites> showPrestationActivite() {
        return this.prestationService.getPrestationActiviteByID();
    }

    @GetMapping(path = "Prestation/{id}")
    public Prestation showPrestation(@PathVariable Integer id) {
        return this.prestationService.getPrestationByID(id);
    }

    @PutMapping("updatePrestation")
    public Prestation updateProduct(@RequestBody Prestation prestation) {
        return prestationService.updatePrestation(prestation);
    }

}
