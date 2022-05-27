package com.dxc.certifications.repository;

import com.dxc.certifications.entity.certificat;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
@Repository
public interface certificat_repo extends CrudRepository<certificat,Integer> {
    @Query("SELECT  new certificat(c.id,c.code, c.titre,c.datecertification,c.ressourceid,c.niveau,c.validation) FROM certificat c WHERE c.ressourceid = ?1")
    List<certificat> displayCertificats(String id);


    @Query("SELECT  new certificat(c.id,c.code, c.titre,c.datecertification,c.ressourceid,c.niveau,c.validation) FROM certificat c WHERE c.ressourceid = ?1 AND c.id =?2")
    certificat displayCertificat(String id1, int id2);
    @Modifying
    @Query("UPDATE certificat c SET c.validation ='valider' WHERE c.id=?1")
    void validation(int id);

    @Modifying
    @Query("UPDATE certificat c SET c.validation ='non valider' WHERE c.id=?1")
    void refus(int id);
}
