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
<<<<<<< HEAD
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @SequenceGenerator(
            name = "ressource_index",
            sequenceName = "ressource_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "ressource_index"
    )

    private String matricule;
=======
    @GeneratedValue
    private int matricule;
>>>>>>> abdelhadi
    private String status;
    private String firstname;
    private String lastname;
    private String genre;
    private Date dateambauche;
    private Date datenaissance;

<<<<<<< HEAD
*/

    public String getMatricule() {
=======
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
>>>>>>> abdelhadi
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
