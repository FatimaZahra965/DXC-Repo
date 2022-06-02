package com.DXC.client.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "DXC/clients")
public class ClientController {
        private final com.DXC.client.services.ClientService clientService;

        @Autowired
        public ClientController(com.DXC.client.services.ClientService clientService) {
            this.clientService = clientService;
        }

        @GetMapping(path = "allClients")
        public List<com.DXC.client.models.Client> getAllClients() {
            return this.clientService.getClient();
        }

        @PostMapping(path = "addClient")
        public void addClient(@RequestBody com.DXC.client.models.Client client) {
            this.clientService.addClient(client);
        }
    @GetMapping(path = "Client/{id}")
    public com.DXC.client.models.Client showClient(@PathVariable Integer id) {
        return this.clientService.getClientByID(id);
    }
    @PutMapping("updateClient")
    public com.DXC.client.models.Client updateClient(@RequestBody com.DXC.client.models.Client client) {
        return clientService.updateClient(client);
    }

}
