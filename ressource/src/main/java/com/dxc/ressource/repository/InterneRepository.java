package com.dxc.ressource.repository;

import com.dxc.ressource.model.Interne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InterneRepository extends JpaRepository<Interne, Long> {
    //get all Intern resources of an activity
    @Query("SELECT c FROM Ressource c, ressourceActivities rc WHERE c.matricule = rc.id_ressource AND rc.id_activite=?1")
    List<Interne> getRessurceOfActivité(Integer idActivite);
    //get all Intern resources of a capability
    @Query("SELECT c FROM Ressource c, ressourceCapabilities rc WHERE c.matricule = rc.id_ressource AND rc.id_capabilite=?1")
    List<Interne> getRessurceOfCapabilite(Integer idCapabilite);
}
