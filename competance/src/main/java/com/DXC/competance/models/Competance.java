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
    @Column(name = "nomCompetance")
    private String nomCompetance;
    @Column(name = "matriculeRessource")
    private int matriculeRessource;
    @Column(name = "nomRessource")
    private String nomRessource;
    @Column(name = "typeComp")
    private String typeComp;
    @Column(name = "evaluationManager")
    private String evaluationManager;
    @Column(name = "niveau")
    private String niveau;

    public Competance() {
    }

    public Competance(int id, String nomCompetance, int matriculeRessource,String nomRessource,String typeComp,String evaluationManager,String niveau) {
        this.id = id;
        this.nomCompetance = nomCompetance;
        this.matriculeRessource = matriculeRessource;
        this.nomRessource = nomRessource;
        this.typeComp = typeComp;
        this.evaluationManager = evaluationManager;
        this.niveau = niveau;
    }

    public Competance(String nomCompetance, int matriculeRessource,String nomRessource,String typeComp,String evaluationManager,String niveau) {
        this.nomCompetance = nomCompetance;
        this.matriculeRessource = matriculeRessource;
        this.nomRessource = nomRessource;
        this.typeComp = typeComp;
        this.evaluationManager = evaluationManager;
        this.niveau = niveau;


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

    public int getMatriculeRessource() {
        return matriculeRessource;
    }

    public void setMatriculeRessource(int matriculeRessource) {
        this.matriculeRessource = matriculeRessource;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public String getNomRessource() {
        return nomRessource;
    }

    public void setNomRessource(String nomRessource) {
        this.nomRessource = nomRessource;
    }

    public String getTypeComp() {
        return typeComp;
    }

    public void setTypeComp(String typeComp) {
        this.typeComp = typeComp;
    }

    public String getEvaluationManager() {
        return evaluationManager;
    }

    public void setEvaluationManager(String evaluationManager) {
        this.evaluationManager = evaluationManager;
    }
}
