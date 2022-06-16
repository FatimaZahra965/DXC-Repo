package com.DXC.competance.repository;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

=======
import com.DXC.competance.models.Competance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
>>>>>>> khalid
import java.util.Optional;

public interface CompetanceRepository extends JpaRepository<com.DXC.competance.models.Competance,Integer> {
    @Query("SELECT c FROM Competance c WHERE c.nomCompetance = ?1")
    Optional<com.DXC.competance.models.Competance> findCompetanceByNomCompetance(String nomCompetance);
<<<<<<< HEAD
=======
    List<Competance> findCompetanceByTypeComp(String typeComp);
    @Query("SELECT c FROM Competance c WHERE c.matriculeRessource = ?1")
    List<Competance> findCompetanceByIdRessource(int matriculeRessource);
>>>>>>> khalid
}
