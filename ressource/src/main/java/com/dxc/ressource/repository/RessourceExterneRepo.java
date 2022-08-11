package com.dxc.ressource.repository;

import com.dxc.ressource.entity.RessourceExterne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RessourceExterneRepo extends JpaRepository<RessourceExterne, Integer> {

}
