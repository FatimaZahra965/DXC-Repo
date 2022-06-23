package com.DXC.activite.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "dxc/activites")
public class ActiviteController {
        private final com.DXC.activite.services.ActiviteService activiteService;

        @Autowired
        public ActiviteController(com.DXC.activite.services.ActiviteService activiteService) {
            this.activiteService = activiteService;
        }

    @GetMapping(path = "allNotAffectedActivites")
    public List<com.DXC.activite.models.Activite> getAllNotAffectedActivites() {
        return this.activiteService.getNoAffectedActivites();
    }

    @GetMapping(path = "allPrestationActivites/{prestation}")
    public List<com.DXC.activite.models.Activite> getAllPrestationActivites(@PathVariable Integer prestation) {
        return this.activiteService.getPrestationActivites(prestation);
    }

<<<<<<< Updated upstream
    @GetMapping(path = "allActivites")
=======
        @GetMapping(path = "allActivites")
>>>>>>> Stashed changes
        public List<com.DXC.activite.models.Activite> getAllActivites() {
            return this.activiteService.getActivite();
        }

        @PostMapping(path = "addActivite")
        public void addActivite(@RequestBody com.DXC.activite.models.Activite activite) {
            this.activiteService.addActivite(activite,activite.getIdRessources());
        }

     /*   @PutMapping("/Activite/{idA}/Ressource/{idR}")
        public void affecterRs(@PathVariable Integer idA,@PathVariable String idR) {
            this.activiteService.affecterRs(idA,idR);
        }*/
    @GetMapping(path = "Activite/{id}")
    public com.DXC.activite.models.Activite showActivite(@PathVariable Integer id) {
        return this.activiteService.getActiviteByID(id);
    }

    @GetMapping(path = "activite/ressource/{idRessource}")
    public List<com.DXC.activite.models.Activite> getActiviteOfRessurce(@PathVariable Integer idRessource) {
        return this.activiteService.getActiviteOfRessurce(idRessource);
    }

    @PutMapping("updateActivite")
    public com.DXC.activite.models.Activite updateActivite(@RequestBody com.DXC.activite.models.Activite activite) {
        return activiteService.updateActivite(activite);
    }

    @PutMapping("affectActivite/{id}/{prestation}")
    public void affectActivite(@PathVariable Integer id, @PathVariable Integer prestation) {
        activiteService.affectPrestation(id, prestation);

        return; // todo return activite object not void
    }
}
