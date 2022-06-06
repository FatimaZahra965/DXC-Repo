package com.DXC.activite.models;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "activite")
public class Activite{
    // generate the id
    // this is use in when adding a new activite
    @Id
    @SequenceGenerator(
            name = "activite_index",
            sequenceName = "activite_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "activite_index"
    )
    private int id;
    private String nomActivite;
    private String typeActivite;
    private String status;
    private String description;
    private String categorie;
    private Date dateDebut;
    private Date dateFin;
    private String idPrestation;



    public Activite() {
    }

    public Activite(int id, String nomActivite,String typeActivite,String description,String categorie,String idPrestation,String status,Date dateDebut,Date dateFin) {
        this.id = id;
        this.nomActivite = nomActivite;
        this.typeActivite = typeActivite;
        this.status = status;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.categorie = categorie;
        this.description = description;
        this.idPrestation= idPrestation;
       
    }

    public Activite(String nomActivite,String typeActivite,String description,String categorie,String idPrestation,String status,Date dateDebut,Date dateFin) {
        this.nomActivite = nomActivite;
        this.typeActivite = typeActivite;
        this.status = status;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.categorie = categorie;
        this.description = description;
        this.idPrestation= idPrestation;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomActivite() {
        return nomActivite;
    }

    public void setNomActivite(String nomActivite) {
        this.nomActivite = nomActivite;
    }
    public String getTypeActivite() {
        return typeActivite;
    }

    public void setTypeActivite(String typeActivite) {
        this.typeActivite = typeActivite;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
    public String getIdPrestation() {
        return idPrestation;
    }

    public void setIdPrestation(String idPrestation) {
        this.idPrestation = idPrestation;
    }



}


