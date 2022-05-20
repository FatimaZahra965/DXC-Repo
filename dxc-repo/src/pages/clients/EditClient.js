import React, { useState }  from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editClientAction } from "../../services/Actions/contratActions";
import { validationError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function EditClient(props) {
  const classes = useStyles();
  const history = useHistory();
  const [nomClient, getNomClient] = useState("");
  const [market, getMarket] = useState("");

 // créer un nouveau contrat
  const dispatch = useDispatch();
  const editClient = (client) =>
    dispatch(editClientAction(client));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validationError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  //editClient
  const submitNewContrat = (e) => {
    e.preventDefault();

    validarForm();

    if (
     
      nomClient.trim() === "" ||
      market.trim() === "" 
   
    ) {
      errorValidation();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //créer un nouveau contrat
    let client = {
      nomClient : nomClient,
      market :market,
      
    };
    editClient(client);
    history.push("/app/prestations/Contrats");
  };


    return (
        <div>
        <div>
          <PageTitle title="Modifier un contrat" path="/app/prestations/Contrats" />
        </div>
        <form onSubmit={submitNewContrat}>
          <Grid container spacing={3}>
        
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
                label="Market"
                size="small"
                variant="outlined"
                fullWidth
                valur={market}
                onChange={(e) => getMarket(e.target.value)}
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
              >
                Annuler
              </Button>
            </Grid>
      </div>
    );
}

export default EditClient;