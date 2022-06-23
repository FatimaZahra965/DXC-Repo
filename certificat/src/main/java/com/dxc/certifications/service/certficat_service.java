package com.dxc.certifications.service;



import com.dxc.certifications.entity.certificat;
import com.dxc.certifications.repository.certificat_repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class certficat_service {
    @Autowired
    private certificat_repo certif_repo;


    public certificat ajout_certif(certificat certif){
        certif.setValidation("en train de valider");
        return certif_repo.save(certif);
    }


    public boolean valider( int id){
       certif_repo.validation(id);
       return true;
    }


    public boolean refus( int id){
        certif_repo.refus(id);
        return true;
    }

    public List<certificat> affichermescertif( String id){
        return certif_repo.displayCertificats(id);
    }


    public certificat affichercertif( String id, int idcertif){
        return certif_repo.displayCertificat(id,idcertif);
    }


    public boolean suppression( int id){
        certif_repo.deleteById(id);
        return true;

    }


    public certificat miseajour(certificat certif){
        certificat certificatexist=certif_repo.findById(certif.getId()).orElse(null);
        certificatexist.setDatecertification(certif.getDatecertification());
        certificatexist.setRessourceid(certif.getRessourceid());
        certificatexist.setNiveau(certif.getNiveau());
        certificatexist.setCode(certif.getCode());
        certificatexist.setTitre(certif.getTitre());
        return certif_repo.save(certificatexist);


    }


}
