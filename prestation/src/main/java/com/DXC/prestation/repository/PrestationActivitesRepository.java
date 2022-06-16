package com.DXC.prestation.repository;

import com.DXC.prestation.models.Prestation;
import com.DXC.prestation.models.PrestationActivites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface PrestationActivitesRepository extends JpaRepository<PrestationActivites,Integer> {
    @Query("SELECT c.id,c.idPrestation,c.idActivite FROM PrestationActivites c WHERE c.idPrestation = ?1")
    Optional<PrestationActivites> findPrestationById(int idPrestation);
}
