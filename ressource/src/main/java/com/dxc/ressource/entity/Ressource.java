package com.dxc.ressource.entity;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity

@Table(name = "ressource", schema = "public")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

public class Ressource {

    @Id
    @GeneratedValue
    private int matricule;
    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;

    @Column(name = "genre")
    private String genre;
    @Column(name="typeRessource")
    private String typeRessource;
    @Column(name = "datenaissance")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datenaissance;

    @OneToMany(targetEntity = Methode.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<Methode> methodes;
    @OneToMany(targetEntity = Outil.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<Outil> outils;
    @OneToMany(targetEntity = Technologie.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<Technologie> technologies;

}
