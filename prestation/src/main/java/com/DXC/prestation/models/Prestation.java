package com.DXC.prestation.models;
import javax.persistence.*;
import java.util.Date;

@Entity
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
    private Date dateDebut;
    private Date dateFin;
    private String titre;
    private String market;

    public Prestation() {
    }
    public Prestation(int id, String titre, String market, String type, String etat) {
        this.id = id;
        this.titre = titre;
        this.market = market;
        this.type = type;
        this.etat= etat;
    }

    public Prestation(String titre, String market, String type, String etat) {
        this.titre = titre;
        this.market = market;
        this.type = type;
        this.etat= etat;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitre() {
        return titre;
    }
    public String getMarket() {
        return market;
    }
    public String getType() {
        return type;
    }
    public String getEtat() {
        return etat;
    }
    public Date getDateDebut() {
        return dateDebut;
    }
    public Date getDateFin() {
        return dateFin;
    }
    public void setTitre(String titre) {
        this.titre = titre;
    }
    public void setMarket(String market) {
        this.market = market;
    }
    public void setType(String type) {
        this.type = type;
    }
    public void setEtat(String etat) {
        this.etat = etat;
    }
    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }
    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

}
