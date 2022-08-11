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
@Table(name = "methode", schema = "public")
public class Methode {
    @Id
    @GeneratedValue
    private int id;
    private String titre;
    private String niveau;


}


