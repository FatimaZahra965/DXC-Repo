package com.dxc.certifications.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "certificat", schema = "public")
public class certificat {
    @Id
    @GeneratedValue
    private int id;
    private String code;
    private String titre;

    private  Date datecertification;

    private String ressourceid;
    private String niveau;

    private String validation;

    public String getValidation() {
        return validation;
    }

    public void setValidation(String valider) {
        validation = valider;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDatecertification() {
        return datecertification;
    }

    public void setDatecertification(Date datecertification) {
        this.datecertification = datecertification;
    }

    public String getRessourceid() {
        return ressourceid;
    }

    public void setRessourceid(String ressourceid) {
        this.ressourceid = ressourceid;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public certificat(int id, String code, String titre, Date datecertification, String ressourceid, String niveau, String validation) {
        this.id = id;
        this.code = code;
        this.titre = titre;
        this.datecertification = datecertification;
        this.ressourceid = ressourceid;
        this.niveau = niveau;
        this.validation = validation;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }
}
