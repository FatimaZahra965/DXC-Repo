package com.dxc.capabilite.controllers;
import com.dxc.capabilite.models.Capabilite;
import com.dxc.capabilite.services.CapabiliteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = "DXC/capabilites")
@CrossOrigin(origins = "http://localhost:3000")
public class CapabiliteController {
        private final CapabiliteService capabiliteService;

        @Autowired
        public CapabiliteController(CapabiliteService capabiliteService) {
            this.capabiliteService = capabiliteService;
        }

        @GetMapping(path = "allCapabilites")
        public List<Capabilite> getAllCapabilites() {
            return this.capabiliteService.getCapabilite();
        }

        @PostMapping(path = "addCapabilite")
        public void addCapabilite(@RequestBody Capabilite capabilite) {
            this.capabiliteService.addCapabilite(capabilite,capabilite.getIdRessources());
        }
    @GetMapping(path = "Capabilite/{id}")
    public com.dxc.capabilite.models.Capabilite showCapabilite(@PathVariable Integer id) {
        return this.capabiliteService.getCapabiliteByID(id);
    }
    @PutMapping("updateCapabilite")
    public com.dxc.capabilite.models.Capabilite updateCapabilite(@RequestBody com.dxc.capabilite.models.Capabilite capabilite) {
        return capabiliteService.updateCapabilite(capabilite);
    }

}
