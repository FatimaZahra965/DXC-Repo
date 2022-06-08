package com.DXC.client.models;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "client")
public class Client {
    // generate the id
    // this is use in when adding a new client
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "nomClient")
    private String nomClient;
    @Column(name = "market")
    private String market;
    @Column(name = "label")
    private String label;

    @OneToMany(mappedBy = "client")
    private List <Contrat> contrat ;

    public Client() {
    }

    public Client(int id,String nomClient, String market, String label) {
        this.id = id;
        this.nomClient = nomClient;
        this.market = market;
        this.label = label;
    }

    public Client( String nomClient, String market, String label) {
        this.nomClient = nomClient;
        this.market = market;
        this.label = label;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomClient() {
        return nomClient;
    }

    public void setNomClient(String nomClient) {
        this.nomClient = nomClient;
    }
    public String getMarket() {
        return market;
    }

    public void setMarket(String market) {
        this.market = market;
    }
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
