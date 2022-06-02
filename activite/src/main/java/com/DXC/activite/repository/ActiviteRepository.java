package com.DXC.activite.repository;
import com.DXC.activite.models.Activite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ActiviteRepository extends JpaRepository<com.DXC.activite.models.Activite,Integer> {
    @Query("SELECT c FROM Activite c WHERE c.nomActivite = ?1")
    Optional<com.DXC.activite.models.Activite> findByNomActivite(String nomActivite);
}
