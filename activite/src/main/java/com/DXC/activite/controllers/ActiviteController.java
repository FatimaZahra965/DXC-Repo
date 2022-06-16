package com.DXC.activite.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "DXC/activites")
public class ActiviteController {
        private final com.DXC.activite.services.ActiviteService activiteService;

        @Autowired
        public ActiviteController(com.DXC.activite.services.ActiviteService activiteService) {
            this.activiteService = activiteService;
        }

        @GetMapping(path = "allActivites")
        public List<com.DXC.activite.models.Activite> getAllActivites() {
            return this.activiteService.getActivite();
        }

        @PostMapping(path = "addActivite")
        public void addActivite(@RequestBody com.DXC.activite.models.Activite activite) {
            this.activiteService.addActivite(activite);
        }
    @GetMapping(path = "Activite/{id}")
    public com.DXC.activite.models.Activite showActivite(@PathVariable Integer id) {
        return this.activiteService.getActiviteByID(id);
    }
    @PutMapping("updateActivite")
    public com.DXC.activite.models.Activite updateActivite(@RequestBody com.DXC.activite.models.Activite activite) {
        return activiteService.updateActivite(activite);
    }

}
