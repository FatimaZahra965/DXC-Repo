
import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";


function AjouterRessource({form}) {

  const initState = {
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
    Profil: '',
    Technologies: {
      Titre: '',
      Niveau: '',
    },
    Methodes: {
      Titre: '',
      Niveau: '',
    },
    Outils: {
      Titre: '',
      Niveau: '',
    },  
  }

  const [state, setState] = useState(initState);

  if (state !== undefined && state["step"] === 2 && state["TypeRessource"] === "interne") { 
    return (
      <div >
        <h2>Ajouter une Ressource interne </h2>
        <SecondForm state={state} setState={setState} />
      </div>
    )
  } else if (state !== undefined && state["step"] === 3 && state["TypeRessource"] === "externe") {
    return (
      <div >
        <h2>Ajouter une Ressource externe </h2>
        <ThirdForm state={state} setState={setState} />
      </div>
    )
  } else {    
  return (
    <div >
      <h2>Ajouter une Ressource </h2>
      <FirstForm state={state} setState={setState}/>
    </div>
  ) 
  }
}


export default AjouterRessource;

