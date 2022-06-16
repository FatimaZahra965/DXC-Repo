package com.DXC.prestation.models;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Getter
@Setter
@Table(name = "Prestation")
public class Prestation {
    // generate the id
    // this is use in when adding a new Prestation
    @Id
    @SequenceGenerator(
            name = "prestation_index",
            sequenceName = "prestation_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "prestation_index"
    )
    private int id;
    private String type;
    private String etat;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "dateDebut")
    private Date dateDebut;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "dateFin")
    private Date dateFin;
    private String titre;
    private String market;
    private int idActivite;



}
