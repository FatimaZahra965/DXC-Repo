package com.dxc.ressource.model;

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
@Table(name = "ressource_activities", schema = "public")
public class ressourceActivities {
    @Id
    @GeneratedValue
    private int id;
    private int id_activite;
    private int id_ressource;
}



