package com.DXC.competance.controllers;
import com.DXC.competance.models.Competance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "DXC/competances")
public class CompetanceController {
        private final com.DXC.competance.services.CompetanceService competanceService;

        @Autowired
        public CompetanceController(com.DXC.competance.services.CompetanceService competanceService) {
            this.competanceService = competanceService;
        }

        @GetMapping(path = "allCompetances")
        public List<com.DXC.competance.models.Competance> getAllCompetances() {
            return this.competanceService.getCompetance();
        }

    /*@GetMapping(path = "CompetancesLing")
    public List<com.DXC.competance.models.Competance> afficheCompetancesLing(@PathVariable String typeComp) {
        return this.competanceService.getCompetanceByTypeComp("Compétences linguistiques");
    }
    @GetMapping(path = "CompetancesTran")
    public List<com.DXC.competance.models.Competance> afficheCompetancesTran(@PathVariable String typeComp) {
        return this.competanceService.getCompetanceByTypeComp("Compétences transversales");
    }*/


        @PostMapping(path = "addCompetance")
        public void addCompetance(@RequestBody com.DXC.competance.models.Competance competance) {
            this.competanceService.addCompetance(competance);
        }
    @GetMapping(path = "Competance/{id}")
    public com.DXC.competance.models.Competance showCompetance(@PathVariable Integer id) {
        return this.competanceService.getCompetanceByID(id);
    }
    @GetMapping(path = "Competance/type/{typeComp}")
    public List<com.DXC.competance.models.Competance> afficheCompetancesTechn(@PathVariable String typeComp) {
        return this.competanceService.getCompetanceByTypeComp(typeComp);
    }


    @PutMapping("updateCompetance")
    public com.DXC.competance.models.Competance updateCompetance(@RequestBody com.DXC.competance.models.Competance competance) {
        return competanceService.updateCompetance(competance);
    }

}
