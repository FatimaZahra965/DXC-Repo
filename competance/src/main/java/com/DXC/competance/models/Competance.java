package com.DXC.competance.models;
import javax.persistence.*;

@Entity
@Table(name = "competance")
public class Competance {
    // generate the id
    // this is use in when adding a new competance
    @Id
    @SequenceGenerator(
            name = "competance_index",
            sequenceName = "competance_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "competance_index"
    )
    private int id;
    private String nomCompetance;
    private String market;

    public Competance() {
    }

    public Competance(int id, String nomCompetance, String market) {
        this.id = id;
        this.nomCompetance = nomCompetance;
        this.market = market;
    }

    public Competance(String nomCompetance, String market) {
        this.nomCompetance = nomCompetance;
        this.market = market;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomCompetance() {
        return nomCompetance;
    }

    public void setNomCompetance(String nomCompetance) {
        this.nomCompetance = nomCompetance;
    }
    public String getMarket() {
        return market;
    }

    public void setMarket(String market) {
        this.market = market;
    }
}
