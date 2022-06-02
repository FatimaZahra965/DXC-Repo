package com.DXC.contrat.controllers;
import com.DXC.contrat.models.Contrat;
import com.DXC.contrat.services.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = "DXC/contrats")
@CrossOrigin(origins = "http://localhost:3000")
public class ContratController {
        private final ContratService contratService;

        @Autowired
        public ContratController(ContratService contratService) {
            this.contratService = contratService;
        }

        @GetMapping(path = "allContrats")
        public List<Contrat> getAllContrats() {
            return this.contratService.getContrat();
        }

        @PostMapping(path = "addContrat")
        public void addContrat(@RequestBody Contrat contrat) {
            this.contratService.addContrat(contrat);
        }
    @GetMapping(path = "Contrat/{id}")
    public com.DXC.contrat.models.Contrat showContrat(@PathVariable Integer id) {
        return this.contratService.getContratByID(id);
    }
    @PutMapping("updateContrat")
    public com.DXC.contrat.models.Contrat updateContrat(@RequestBody com.DXC.contrat.models.Contrat contrat) {
        return contratService.updateContrat(contrat);
    }

}
