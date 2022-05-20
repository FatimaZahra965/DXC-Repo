package com.DXC.client.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    private final com.DXC.client.repository.ClientRepository clientRepository;

    @Autowired
    public ClientService(com.DXC.client.repository.ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<com.DXC.client.models.Client> getClient() {
        return this.clientRepository.findAll();
    }

    public com.DXC.client.models.Client getClientByID(Integer id) {
        return clientRepository.findById(id).orElse(null);
    }
    public void addClient(com.DXC.client.models.Client client) {
        Optional<com.DXC.client.models.Client> optionalClient = clientRepository.findClientByNomClient(client.getNomClient());
        if (optionalClient.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        clientRepository.save(client);
    }
    public com.DXC.client.models.Client updateClient(com.DXC.client.models.Client client) {
        com.DXC.client.models.Client existingClient = clientRepository.findById(client.getId()).orElse(null);
        existingClient.setNomClient(client.getNomClient());
        existingClient.setMarket(client.getMarket());

        return clientRepository.save(existingClient);
    }
}
