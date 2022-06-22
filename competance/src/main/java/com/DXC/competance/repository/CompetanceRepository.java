package com.DXC.competance.repository;
import com.DXC.competance.models.Competance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CompetanceRepository extends JpaRepository<com.DXC.competance.models.Competance,Integer> {
    @Query("SELECT c FROM Competance c WHERE c.nomCompetance = ?1")
    Optional<com.DXC.competance.models.Competance> findCompetanceByNomCompetance(String nomCompetance);
    List<Competance> findCompetanceByTypeComp(String typeComp);
    @Query("SELECT c FROM Competance c WHERE c.matriculeRessource = ?1")
    List<Competance> findCompetanceByIdRessource(int matriculeRessource);
}
