package com.DXC.competance.controllers;
<<<<<<< HEAD
=======
import com.DXC.competance.models.Competance;
>>>>>>> khalid
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
<<<<<<< HEAD
@CrossOrigin(origins = "http://localhost:3000")
=======
@CrossOrigin(origins = "*")
>>>>>>> khalid
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
<<<<<<< HEAD
=======
    @GetMapping(path = "Competance/{matriculeRessource}")
    public List<com.DXC.competance.models.Competance> CompetanceByIdRessoure(@PathVariable int matriculeRessource) {
        return this.competanceService.getCompetanceByIdRessource(matriculeRessource);
    }
>>>>>>> khalid
    @GetMapping(path = "Competance/{id}")
    public com.DXC.competance.models.Competance showCompetance(@PathVariable Integer id) {
        return this.competanceService.getCompetanceByID(id);
    }
<<<<<<< HEAD
=======

        @GetMapping(path = "Competance/type/{typeComp}")
    public List<com.DXC.competance.models.Competance> afficheCompetancesTechn(@PathVariable String typeComp) {
        return this.competanceService.getCompetanceByTypeComp(typeComp);
    }


>>>>>>> khalid
    @PutMapping("updateCompetance")
    public com.DXC.competance.models.Competance updateCompetance(@RequestBody com.DXC.competance.models.Competance competance) {
        return competanceService.updateCompetance(competance);
    }

}
