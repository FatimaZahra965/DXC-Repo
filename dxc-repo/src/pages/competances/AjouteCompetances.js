import React, { useState }  from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewCompetanceAction } from "../../services/Actions/competanceActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function AjouteCompetance() {
  const classes = useStyles();
  const history = useHistory();
  const [nomCompetance, getNomCompetance] = useState("");
  const [nomClient, getNomClient] = useState("");
  const [description, getDescription] = useState("");

 // créer un nouveau Competance
  const dispatch = useDispatch();
  const addCompetance = (competance) =>
    dispatch(createNewCompetanceAction(competance));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew Competance
  const submitNewCompetance = (e) => {
    e.preventDefault();

    validarForm();

    if (
      nomCompetance.trim() === ""
      
   
    ) {
      errorValidation();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //créer un nouveau Competance
    let competance = {
      nomCompetance : nomCompetance,
      
      
    };
    addCompetance(competance);
    history.push("/app/competances");
  };
  return (
    <div>
      <div>
        <PageTitle title="Ajoute Competance" path="/app/competances" />
      </div>
      <form onSubmit={submitNewCompetance}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomContrat"
              label="Nom de Competance"
              size="small"
              variant="outlined"
              fullWidth
              valur={nomCompetance}
              onChange={(e) => getNomCompetance(e.target.value)}
            />
          </Grid>
      
          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Nom de Client"
              size="small"
              variant="outlined"
              fullWidth
              valur={nomClient}
              onChange={(e) => getNomClient(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-description"
              label="Description"
              size="small"
              variant="outlined"
              fullWidth
              valur={description}
              onChange={(e) => getDescription(e.target.value)}
            />
          </Grid>
       
      
          {/* <Grid item xs={6}>
            <label>Date de Debut</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              type="date"
              valur={DateDebut}
              onChange={(e) => getDateDebut(e.target.value)}
            />
          </Grid> */}
    
        </Grid>
      </form>
      <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              type="submit"
              className={classes.btnAjouter}
              color="primary"
              onClick={submitNewCompetance}
            >
              Ajouter
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
            >
              Annuler
            </Button>
          </Grid>
    </div>
  );
}

export default AjouteCompetance;
