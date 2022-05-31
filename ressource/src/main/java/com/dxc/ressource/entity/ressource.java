package com.dxc.ressource.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

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
    private String matricule;
    private String status;
    private String firstname;
    private String lastname;
    private String genre;
    private Date dateambauche;
    private Date datenaissance;
  /*  @OneToMany(targetEntity = certificat.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "ressourceid", referencedColumnName = "matricule")
    private List<certificat> certif;

*/

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matriculee) {
        matricule = matriculee;
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
