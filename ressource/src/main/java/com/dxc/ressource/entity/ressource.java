package com.dxc.ressource.entity;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
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

public class ressource {

    @Id
    @GeneratedValue
    private int matricule;
    @Column(name = "status")
    private String status;
    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "profil")
    private String profil;

    @Column(name = "genre")
    private String genre;
    @Column(name = "dateambauche")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateambauche;
    @Column(name = "datenaissance")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datenaissance;
    private String profilefacturation;

    @OneToMany(targetEntity = methode.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<methode> methodes;
    @OneToMany(targetEntity = outil.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<outil> outils;
    @OneToMany(targetEntity = technologie.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<technologie> technologies;

}
