package com.DXC.contrat.repository;
import com.DXC.contrat.models.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ContratRepository extends JpaRepository<Contrat,Integer> {
    @Query("SELECT c FROM Contrat c WHERE c.nomContrat = ?1")
    Optional<Contrat> findContratByNomContrat(String nomContrat);
}
