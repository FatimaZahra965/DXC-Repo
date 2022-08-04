package com.dxc.ressource.model;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="ressource_type",
        discriminatorType = DiscriminatorType.INTEGER)
@Table(name = "ressource", schema = "public")

public class Ressource {
    @Id
    @SequenceGenerator(
            name = "Ressource_index",
            sequenceName = "Ressource_index",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Ressource_index"
    )
    private Long matricule;
    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "genre")
    private String genre;

}
