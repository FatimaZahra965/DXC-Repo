import React, { useState }  from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewContratAction } from "../../services/Actions/contratActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function AjouteContrat() {
  const classes = useStyles();
  const history = useHistory();
  const [nomContrat, getNomContrat] = useState("");
  const [nomClient, getNomClient] = useState("");
  const [description, getDescription] = useState("");

 // créer un nouveau contrat
  const dispatch = useDispatch();
  const addContrat = (contrat) =>
    dispatch(createNewContratAction(contrat));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew contrat
  const submitNewContrat = (e) => {
    e.preventDefault();

    validarForm();

    if (
      nomContrat.trim() === "" ||
      nomClient.trim() === "" ||
      description.trim() === "" 
   
    ) {
      errorValidation();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //créer un nouveau contrat
    let contrat = {
      nomContrat : nomContrat,
      nomClient : nomClient,
      description :description,
      
    };
    addContrat(contrat);
    history.push("/app/prestations/Contrats");
  };
  function AnnulerContrat() {
    history.push("/app/prestations/Contrats");
  }
  return (
    <div>
      <div>
        <PageTitle title="Ajoute contrat" path="/app/prestations/Contrats" />
      </div>
      <form onSubmit={submitNewContrat}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomContrat"
              label="Nom de Contrat"
              size="small"
              variant="outlined"
              fullWidth
              valur={nomContrat}
              onChange={(e) => getNomContrat(e.target.value)}
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
              onClick={submitNewContrat}
            >
              Ajouter
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={AnnulerContrat}
            >
              Annuler
            </Button>
          </Grid>
    </div>
  );
}

export default AjouteContrat;
