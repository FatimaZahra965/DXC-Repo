package com.DXC.prestation.models;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "PrestationActivites", schema = "public")
public class PrestationActivites {
    @Id
    @GeneratedValue
    private int id;
    private int idPrestation;
    private int idActivite;


}


