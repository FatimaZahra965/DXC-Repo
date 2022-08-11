package com.dxc.ressource.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "ressource_capabilities", schema = "public")
public class RessourceCapabilities {
    @Id
    @GeneratedValue
    private int id;
    private int id_capabilite;
    private int id_ressource;
}



