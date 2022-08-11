package com.dxc.ressource.entity;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity

@Table(name = "ressource_interne", schema = "public")

public class RessourceInterne extends Ressource{


    @Column(name = "status")
    private String status;
    @Column(name = "profil")
    private String profil;
    @Column(name = "date_embauche")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateEmbauche;


}
