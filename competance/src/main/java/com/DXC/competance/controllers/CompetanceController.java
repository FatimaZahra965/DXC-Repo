package com.DXC.competance.controllers;
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


        @PostMapping(path = "addCompetance")
        public void addCompetance(@RequestBody com.DXC.competance.models.Competance competance) {
            this.competanceService.addCompetance(competance);
        }
    @GetMapping(path = "Competance/{id}")
    public com.DXC.competance.models.Competance showCompetance(@PathVariable Integer id) {
        return this.competanceService.getCompetanceByID(id);
    }
    @PutMapping("updateCompetance")
    public com.DXC.competance.models.Competance updateCompetance(@RequestBody com.DXC.competance.models.Competance competance) {
        return competanceService.updateCompetance(competance);
    }
    @GetMapping("/competanceByTypeComp/{typeComp}")
    public com.DXC.competance.models.Competance findCompetanceByTypeComp(@PathVariable String typeComp) {
        return competanceService.getCompetanceByTypeComp(typeComp);
    }

}
