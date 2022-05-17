package com.DXC.prestation.repository;
import com.DXC.prestation.models.Prestation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PrestationRepository extends JpaRepository<Prestation,Integer> {
    @Query("SELECT c FROM Prestation c WHERE c.titre = ?1")
    Optional<Prestation> findPrestationByTitre(String titre);
}