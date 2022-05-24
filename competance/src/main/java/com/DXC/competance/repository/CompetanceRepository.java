package com.DXC.competance.repository;
import com.DXC.competance.models.Competance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CompetanceRepository extends JpaRepository<com.DXC.competance.models.Competance,Integer> {
    @Query("SELECT c FROM Competance c WHERE c.nomCompetance = ?1")
    Competance findByTypeComp(String typeComp);
    Optional<com.DXC.competance.models.Competance> findCompetanceByNomCompetance(String nomCompetance);
}
