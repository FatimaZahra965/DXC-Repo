package com.dxc.ressource.repository;

import com.dxc.ressource.entity.Ressource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RessourceRepo extends JpaRepository<Ressource, Integer> {

    @Query("SELECT c FROM Ressource c, RessourceActivities rc WHERE c.matricule = rc.id_ressource AND rc.id_activite=?1")
    List<Ressource> getRessurceOfActivité(Integer idActivite);

    @Query("SELECT c FROM Ressource c, RessourceCapabilities rc WHERE c.matricule = rc.id_ressource AND rc.id_capabilite=?1")
    List<Ressource> getRessurceOfCapabilite(Integer idCapabilite);
}
