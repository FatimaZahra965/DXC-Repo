import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import React, { Component } from 'react'

export default class AjouterRessource1 extends Component {

    state = {
        step: 1,
        Matricule: '',
        Prenom: '',
        Nom: '',
        Genre: '',
        TypeRessource: '',
        DateNaissance: '',
        DateEmbauche: '',
        DateDebut: '',
        DateFin: '',
        Description: '',
        Status: '',
        Profil: ''
    }

    prevStep = () => {
        this.setState({ step: 1 });
      }

    nextStep = () => {
        const { TypeRessource } = this.state;
        if (TypeRessource === "interne"){
            this.setState({ step: 2});
        } else if (TypeRessource === "externe"){
            this.setState({ step: 3});
        }
      } 
      
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }  

  render() {

    const { step } = this.state;
    const { Matricule, Prenom, Nom, Genre, TypeRessource, DateNaissance, DateEmbauche, DateDebut, DateFin, Description, Status, Profil } = this.state;
    const values = { Matricule, Prenom, Nom, Genre, TypeRessource, DateNaissance, DateEmbauche, DateDebut, DateFin, Description, Status, Profil }

    switch (step) {
        case 1 :
            return (
                <generalDetails
                nextStep = { this.nextStep}
                handleChange = { this.handleChange}
                values= { values}
                />
            )
        case 2 :
            return (
                <interneDetails
                prevStep = { this.prevStep}
                handleChange = { this.handleChange}
                values = { values}
                />
            )
        case 3 : 
            return (
                <externeDetails
                prevStep = { this.prevStep}
                handleChange = { this.handleChange}
                values = { values}
                />
            )
        default:            
    }
    return (
      <div>AjouterRessource1</div>
    )
  }
}
