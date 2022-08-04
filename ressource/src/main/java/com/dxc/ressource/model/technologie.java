package com.dxc.ressource.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "technologie", schema = "public")
public class technologie {
    @Id
    @SequenceGenerator(
            name = "technologie_index",
            sequenceName = "technologie_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "technologie_index"
    )
    private int id;
    private String titre;
    private String niveau;
}


