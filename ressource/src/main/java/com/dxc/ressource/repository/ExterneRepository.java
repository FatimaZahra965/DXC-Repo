package com.dxc.ressource.repository;

import com.dxc.ressource.model.Externe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExterneRepository extends JpaRepository<Externe,Long> {

}
