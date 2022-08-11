package com.dxc.ressource.entity;


import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity

@Table(name = "ressource_externe", schema = "public")
public class RessourceExterne extends Ressource{

    @Column(name = "description")
    private String description;
    @Column(name = "date_debut")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateDebut;
    @Column(name = "date_fin")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateFin;
}
