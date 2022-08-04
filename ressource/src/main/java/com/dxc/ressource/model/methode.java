package com.dxc.ressource.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "methode", schema = "public")
public class methode {
    @Id
    @SequenceGenerator(
            name = "methode_index",
            sequenceName = "methode_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "methode_index"
    )
    private int id;
    private String titre;
    private String niveau;


}


