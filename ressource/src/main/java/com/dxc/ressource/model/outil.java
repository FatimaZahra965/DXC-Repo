package com.dxc.ressource.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "outil", schema = "public")
public class outil {
    @Id
    @SequenceGenerator(
            name = "outil_index",
            sequenceName = "outil_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "outil_index"
    )

    private int id;
    private String titre;
    private String niveau;
    

}


