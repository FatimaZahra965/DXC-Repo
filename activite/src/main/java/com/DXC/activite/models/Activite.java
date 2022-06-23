package com.DXC.activite.models;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import lombok.*;

import javax.persistence.*;
import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Getter
@Setter
@Table(name = "activite")
public class Activite {
    // generate the id
    // this is use in when adding a new activite
    @Id
    @SequenceGenerator(name = "activite_index", sequenceName = "activite_index", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "activite_index")
    private int id;
    private String nomActivite;
    private String typeActivite;
    private String status;
    private String description;
    private String categorie;
    private Date dateDebut;
    private Date dateFin;
    private int fkPrestation;
    @Transient
    private List<Integer> idRessources = new ArrayList<>();

    public List<Integer> getIdRessources() {
        return idRessources;
<<<<<<< Updated upstream
    }

    public void setIdRessources(List<Integer> idRessources) {
        this.idRessources = idRessources;
=======
    }

    public void setIdRessources(List<Integer> idRessources) {
        this.idRessources = idRessources;
    }

    public int getFkPrestation() {
        return fkPrestation;
>>>>>>> Stashed changes
    }
    /*
     * @ManyToMany
     * 
     * @JoinTable(
     * name = "ressource_activites",
     * joinColumns = @JoinColumn(name = "id_activite"),
     * inverseJoinColumns = @JoinColumn(name = "id_ressource")
     * )
     * private List<Ressources> ressources= new ArrayList<>();
     */

<<<<<<< Updated upstream
=======
    public void setFkPrestation(int fkPrestation) {
        this.fkPrestation = fkPrestation;
    }
/*   @ManyToMany
    @JoinTable(
            name = "ressource_activites",
            joinColumns = @JoinColumn(name = "id_activite"),
            inverseJoinColumns = @JoinColumn(name = "id_ressource")
    )
    private List<Ressources> ressources= new ArrayList<>();*/





>>>>>>> Stashed changes
}
