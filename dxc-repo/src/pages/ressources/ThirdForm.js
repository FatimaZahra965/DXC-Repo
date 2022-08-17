import React from "react";
import Input from "./Input";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Button, } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { validationSuccess } from "../../services/Actions/validacionActions";
import { createNewRessourceExterneAction } from "../../services/Actions/ressourcesActions";

function ThirdForm({state, setState}) {
  

  function decrementStep() {
    setState({ ...state, step: 1 });
  }

  const dispatch=useDispatch();

  const SuccessValidation = () => dispatch(validationSuccess());

  const submitRessourceExterne = (e) =>{
    SuccessValidation();
    let ressource = {
      Matricule: state.Matricule,
      Prenom: state.Prenom,
      Nom: state.Nom,
      Genre: state.Genre,
      TypeRessource: state.TypeRessource,
      DateNaissance: state.DateNaissance,
      DateDebut: state.DateDebut,
      DateFin: state.DateFin,
      Description: state.Description,
    };
    console.log(ressource);
    dispatch(createNewRessourceExterneAction(ressource));
    history.push(`/app/prestations/ressources`);
  } 


  const classes = useStyles();
  
  const history = useHistory();

  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };

  return (
    <>

<hr className={classes.hrGlobale}></hr>

<form onSubmit={submitRessourceExterne}>
  <Grid container spacing={3}>

    <Grid item xs={12}>
      <Input
        id="outlined-select-currency"
        name="Description"
        label="Description du freelancer"
        value={state}
        handler={setState}
      >
        {/* {typeRessource.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))} */}
      </Input>
    </Grid>


    <Grid item xs={6}>
      <label>Date début de mission </label>
      <Input
        id="outlined-basic"
        name="DateDebut"
        type = "date"
        value={state}
        handler={setState}
        required
      />
    </Grid>
    <Grid item xs={6}>
      <label>Date fin de mission </label>
      <Input
        id="outlined-basic"
        name="DateFin"
        type = "date"
        value={state}
        handler={setState}
        required
      />
    </Grid>
    <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              type="button"
              className={classes.btnAjouter}
              color="primary"
              onClick={decrementStep}
            >
              Retour
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={() => {
                annuler();
              }}
            >
              Annuler
            </Button>
            <Button
                  size="small"
                  variant="contained"
                  className={classes.btnAjouter}
                  color="secondary"
                  type="submit"
                >
                  Ajouter
                </Button>
          </Grid>
        </Grid>
      </form>

    </>
  );
}

export default ThirdForm;
