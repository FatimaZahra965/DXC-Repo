package com.DXC.contrat.models;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "contrat")
public class Contrat {
    // generate the id
    // this is use in when adding a new Contrat
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "nomContrat")
    private String nomContrat;
    @Column(name = "nomClient")
    private String nomClient;
    @Column(name = "description")
    private String description;
    @Column(name = "type")
    private String type;
    @Column(name = "dateDebut")
    private Date dateDebut;

    @Column(name = "dateFin")
    private Date dateFin;

    public Contrat() {
    }

    public Contrat(int id, String nomContrat, String nomClient, String description, String type,Date dateDebut,Date dateFin) {
        this.id = id;
        this.nomContrat = nomContrat;
        this.nomClient = nomClient;
        this.description = description;
        this.type = type;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

    public Contrat(String nomContrat, String nomClient, String description, String type, Date dateDebut,Date dateFin) {
        this.nomContrat = nomContrat;
        this.nomClient = nomClient;
        this.description = description;
        this.type = type;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getNomContrat() {
        return nomContrat;
    }

    public void setNomContrat(String nomContrat) {
        this.nomContrat = nomContrat;
    }
    public String getNomClient() {
        return nomClient;
    }

    public void setNomClient(String nomClient) {
        this.nomClient = nomClient;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
