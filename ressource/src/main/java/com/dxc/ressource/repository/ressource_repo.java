package com.dxc.ressource.repository;

import com.dxc.ressource.entity.ressource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ressource_repo extends JpaRepository<ressource,Integer> {


}
