package com.dxc.ressource.dto;

import lombok.*;

@Data
@Getter
//@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
//this class serves as a contract between the MSs Ressource and BonDeCommande
public class BonDeCommandeDTO {

    private Long fK_idFreelancer;
    private String fL_FirstName;
    private String fL_LastName;
    private Double th = 0.0;
    //this constructor job is to initialise the attributes

    public BonDeCommandeDTO(Long fK_idFreelancer , String fL_FirstName , String fL_LastName , Double th ){
        this.fK_idFreelancer = fK_idFreelancer;
        this.fL_FirstName = fL_FirstName;
        this.fL_LastName = fL_LastName;
        this.th = th;
    }
}
