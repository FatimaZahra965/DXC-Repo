package com.dxc.ressource.model;
import lombok.ToString;
import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
@DiscriminatorValue("2")
public class Externe extends Ressource {
    //private String email; //test de validation
    private Double TH; // if it needs to change then the manager updates th record himself
    //the id of a freelancer needs to be unique and if it changes the manager has to update th record
    //this list contains all related Bc ids to this freelancer
}
