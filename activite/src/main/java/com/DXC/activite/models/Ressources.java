package com.DXC.activite.models;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter

@Entity
@Table(name = "ressources")
public class Ressources {
    @Id
    @GeneratedValue(generator="system-uuid")
    private String matricule;
    private String status;
    private String firstname;
    private String lastname;
    private String genre;
    private Date dateambauche;
    private Date datenaissance;
   /* @ManyToMany(mappedBy = "ressources", fetch = FetchType.EAGER)
    private List<Activite> activites= new ArrayList<>();*/
}
