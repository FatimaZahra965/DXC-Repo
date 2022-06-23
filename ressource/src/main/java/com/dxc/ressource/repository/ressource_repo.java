package com.dxc.ressource.repository;

import com.dxc.ressource.entity.ressource;
import com.dxc.ressource.entity.ressourceActivities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ressource_repo extends JpaRepository<ressource, Integer> {

    @Query("SELECT c FROM ressource c, ressourceActivities rc WHERE c.matricule = rc.id_ressource AND rc.id_activite=?1")
    List<ressource> getRessurceOfActivité(Integer idActivite);

    @Query("SELECT c FROM ressource c, ressourceCapabilities rc WHERE c.matricule = rc.id_ressource AND rc.id_capabilite=?1")
    List<ressource> getRessurceOfCapabilite(Integer idCapabilite);
}
