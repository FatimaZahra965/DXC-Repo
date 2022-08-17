import React from "react";
import Input from "./Input";
import useStyles from "./styles";
import { useHistory} from "react-router-dom";


import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";


import { validationSuccess } from "../../services/Actions/validacionActions";
import { createNewRessourceInterneAction } from "../../services/Actions/ressourcesActions";
import { useDispatch } from "react-redux";

function SecondForm({state, setState}) {
  

  function decrementStep() {
    setState({ ...state, step: 1 });
  }

  const classes = useStyles();
  
  const history = useHistory();

  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };

  const dispatch=useDispatch();

  const SuccessValidation = () => dispatch(validationSuccess());

  const submitRessourceInterne = (e) =>{
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
    dispatch(createNewRessourceInterneAction(ressource));
    history.push(`/app/prestations/ressources`);
  } 

  return (

    <>

    <hr className={classes.hrGlobale}></hr>
    
    <form onSubmit={submitRessourceInterne}>
      <Grid container spacing={3}>
            
        <Grid item xs={6}>
          <Input
            id="outlined-select-currency"
            name="Profil"
            label="Profil de facturation"
            value={state}
            handler={setState}
            required
          >
            {/* {typeRessource.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))} */}
          </Input>
        </Grid>

        <Grid item xs={6}>
          <Input
            id="outlined-basic"
            label="Status"
            name="Status"
            value={state}
            handler={setState}
            required
          />
        </Grid>
    
        <Grid item xs={6}>
          <label>Date d'embauche </label>
          <Input
            id="outlined-basic"
            name="DateEmbauche"
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
                  onClick={() => {
                    annuler();
                  }}
                >
                  Ajouter
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


export default SecondForm;
