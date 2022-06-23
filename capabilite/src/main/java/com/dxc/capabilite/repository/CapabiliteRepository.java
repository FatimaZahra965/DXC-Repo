package com.dxc.capabilite.repository;

import com.dxc.capabilite.models.Capabilite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CapabiliteRepository extends JpaRepository<Capabilite,Integer> {
    @Query("SELECT c FROM Capabilite c WHERE c.intitule = ?1")
    Optional<Capabilite> findCapabiliteByIntitule(String intitule);
}







