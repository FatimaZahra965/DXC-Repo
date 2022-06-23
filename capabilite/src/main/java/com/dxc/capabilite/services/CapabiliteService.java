package com.dxc.capabilite.services;
import com.dxc.capabilite.models.Capabilite;
import com.dxc.capabilite.models.RessourceCapabilite;
import com.dxc.capabilite.repository.CapabiliteRepository;
import com.dxc.capabilite.repository.RessourceCapabilitiesRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CapabiliteService {
    private final CapabiliteRepository capabiliteRepository;
    private final RessourceCapabilitiesRepository ressourceCapabilitesRepository;

    public List<Capabilite> getCapabilite() {
        return this.capabiliteRepository.findAll();
    }
    public com.dxc.capabilite.models.Capabilite getCapabiliteByID(Integer id) {
        return capabiliteRepository.findById(id).orElse(null);
    }
    public void addCapabilite(Capabilite capabilite, List<Integer> idRessources) {
        Optional<Capabilite> optionalCapabilite = capabiliteRepository.findCapabiliteByIntitule(capabilite.getIntitule());
        if (optionalCapabilite.isPresent()) {
            throw new IllegalStateException("already exist");
        }
        Capabilite savedCapabilite = capabiliteRepository.save(capabilite);
        idRessources.forEach(element -> {
            RessourceCapabilite newOne = new RessourceCapabilite();
            newOne.setId_capabilite(savedCapabilite.getId());
            newOne.setId_ressource(element);
            ressourceCapabilitesRepository.save(newOne);
        });
    }
    public com.dxc.capabilite.models.Capabilite updateCapabilite(com.dxc.capabilite.models.Capabilite capabilite) {
        com.dxc.capabilite.models.Capabilite existingCapabilite = capabiliteRepository.findById(capabilite.getId()).orElse(null);
        existingCapabilite.setIntitule(capabilite.getIntitule());
        existingCapabilite.setMatricule(capabilite.getMatricule());
        existingCapabilite.setDescription(capabilite.getDescription());
       

        return capabiliteRepository.save(existingCapabilite);
    }
}
