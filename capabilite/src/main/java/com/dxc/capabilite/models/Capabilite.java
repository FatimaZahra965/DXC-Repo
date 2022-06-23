package com.dxc.capabilite.models;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "capabilite")
public class Capabilite {
    // generate the id
    // this is use in when adding a new Capabilite
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "matricule")
    private String matricule;
    @Column(name = "intitule")
    private String intitule;
    @Column(name = "description")
    private String description;
    @Transient
    private List<Integer> idRessources = new ArrayList<>();

    public List<Integer> getIdRessources() {
        return idRessources;
    }

    public void setIdRessources(List<Integer> idRessources) {
        this.idRessources = idRessources;
    }





    public Capabilite() {
    }

    public Capabilite(int id, String matricule, String intitule, String description) {
        this.id = id;
        this.matricule = matricule;
        this.intitule = intitule;
        this.description = description;
    }

    public Capabilite(String matricule, String intitule, String description) {
        this.matricule = matricule;
        this.intitule = intitule;
        this.description = description;
       
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }
    public String getIntitule() {
        return intitule;
    }

    public void setIntitule(String intitule) {
        this.intitule = intitule;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

   

}
