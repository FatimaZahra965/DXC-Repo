package com.DXC.prestation.controllers;
import com.DXC.prestation.models.Prestation;
import com.DXC.prestation.services.PrestationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "*")
@CrossOrigin(origins = "http://localhost:3000")
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
        public void addPrestation(@RequestBody Prestation prestation) {
            this.prestationService.addPrestation(prestation);
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
