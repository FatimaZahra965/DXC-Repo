package com.DXC.contrat.models;
import javax.persistence.*;

@Entity
@Table(name = "contrat")
public class Contrat {
    // generate the id
    // this is use in when adding a new Contrat
    @Id
    @SequenceGenerator(
            name = "contrat_index",
            sequenceName = "contrat_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "contrat_index"
    )
    private int id;
    private String nomContrat;
    private String nomClient;
    private String description;

    public Contrat() {
    }

    public Contrat(int id, String nomContrat, String nomClient, String description) {
        this.id = id;
        this.nomContrat = nomContrat;
        this.nomClient = nomClient;
        this.description = description;
    }

    public Contrat(String nomContrat, String nomClient, String description) {
        this.nomContrat = nomContrat;
        this.nomClient = nomClient;
        this.description = description;
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
}
