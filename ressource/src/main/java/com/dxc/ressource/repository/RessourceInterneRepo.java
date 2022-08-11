package com.dxc.ressource.repository;

import com.dxc.ressource.entity.RessourceInterne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RessourceInterneRepo extends JpaRepository<RessourceInterne, Integer> {
}
