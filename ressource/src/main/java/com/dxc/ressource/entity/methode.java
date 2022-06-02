package com.dxc.ressource.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "methode", schema = "public")
public class methode {
    @Id
    @GeneratedValue
    private int id;
    private String titre;
    private String niveau;


}


