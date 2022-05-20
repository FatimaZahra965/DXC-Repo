package com.DXC.client.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<com.DXC.client.models.Client,Integer> {
    @Query("SELECT c FROM Client c WHERE c.nomClient = ?1")
    Optional<com.DXC.client.models.Client> findClientByNomClient(String nomClient);
}
