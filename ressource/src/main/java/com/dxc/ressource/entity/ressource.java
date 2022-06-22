package com.dxc.ressource.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
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

    @OneToMany(targetEntity = methode.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<methode> methodes;
    @OneToMany(targetEntity = outil.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<outil> outils;
    @OneToMany(targetEntity = technologie.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<technologie> technologies;


    public int getMatricule() {
        return matricule;
    }

    public void setMatricule(int matricule) {
        this.matricule = matricule;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String statuss) {
        status = statuss;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstName) {
        firstname = firstName;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        lastname = lastName;
    }

    public String getGenre() {
        return genre;
    }

    public String getProfil() {
        return profil;
    }

    public void setProfil(String profil) {
        this.profil = profil;
    }

    public void setGenre(String genree) {
        genre = genree;
    }

    public Date getDateAmbauche() {
        return dateambauche;
    }

    public void setDateAmbauche(Date dateAmbauche) {
        dateambauche = dateAmbauche;
    }

    public Date getDateNaissance() {
        return datenaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        datenaissance = dateNaissance;
    }
}
