package com.dxc.ressource.model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
@DiscriminatorValue("1")
public class Interne extends Ressource {

    @Column(name = "status")
    private String status;
    @Column(name = "profil")
    private String profil;
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
