package com.dxc.ressource.service;

import com.dxc.ressource.dto.BonDeCommandeDTO;
import com.dxc.ressource.model.Externe;
import com.dxc.ressource.repository.ExterneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
@Service
public class ExterneService {

    //this obj is used to send rest requests between MSs
    private RestTemplate restTemplate = new RestTemplate();
    private ExterneRepository externeRepository;
    @Autowired
    public ExterneService(ExterneRepository externeRepository) {
        this.externeRepository =  externeRepository;
    }

    public Externe addFreelancer(Externe ressource) {
        Externe externe = externeRepository.save(ressource);
        BonDeCommandeDTO bonDeCommandeDTO = new BonDeCommandeDTO();
        bonDeCommandeDTO.setFK_idFreelancer(externe.getMatricule());
        bonDeCommandeDTO.setFL_FirstName(externe.getFirstname());
        bonDeCommandeDTO.setFL_LastName(externe.getLastname());
        bonDeCommandeDTO.setTh(externe.getTH());
        //create a bc : send a request to the bc MS
        //we have to receive th result obj to make sure everything works well
        BonDeCommandeDTO bcRequestSent = sendContractObj(bonDeCommandeDTO);
        return externe;
    }
    //this methode sends the bc obj to be created
    public BonDeCommandeDTO sendContractObj(BonDeCommandeDTO bonDeCommandeDTO){
        //BC MS server port
        String serviceUrl = "http://localhost:9005/DXC/BonDeCommande/addBc";
        BonDeCommandeDTO response = restTemplate.postForObject(serviceUrl,bonDeCommandeDTO,BonDeCommandeDTO.class);
        return response;
    }

    public List<Externe> getFreelancers() {
        return externeRepository.findAll();
    }

    public Externe getFreelancerById(Long id) {
        return externeRepository.findById(id).orElse(null);
    }

    public boolean dropFreelancer(Long id) {
        externeRepository.deleteById(id);
        return true;

    }

    public Externe updateFreelancer(Externe ressource) {
        Externe existingExterne = externeRepository.findById(ressource.getMatricule()).orElse(null);
        existingExterne.setFirstname(ressource.getFirstname());
        existingExterne.setLastname(ressource.getLastname());
        existingExterne.setGenre(ressource.getGenre());
        existingExterne.setTH(ressource.getTH());
        return externeRepository.save(existingExterne);
    }
}
