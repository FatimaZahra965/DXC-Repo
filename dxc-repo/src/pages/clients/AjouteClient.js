import React, { useState }  from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewClientAction } from "../../services/Actions/clientActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function AjouteClient() {
  const classes = useStyles();
  const history = useHistory();
  const [nomClient, getNomClient] = useState("");
  const [market, getMarket] = useState("");

 // créer un nouveau Client
  const dispatch = useDispatch();
  const addClient = (client) =>
    dispatch(createNewClientAction(client));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew Client
  const submitNewClient = (e) => {
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

    //créer un nouveau Client
    let client = {
      nomClient : nomClient,
      market :market,
      
    };
    addClient(client);
    history.push("/app/prestations/clients");
  };
  function AnnulerClient() {
    history.push("/app/prestations/clients");
  }
  return (
    <div>
      <div>
        <PageTitle title="Ajoute Client" path="/app/prestations/clients" />
      </div>
      <form onSubmit={submitNewClient}>
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
       
    
        </Grid>
      </form>
      <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              type="submit"
              className={classes.btnAjouter}
              color="primary"
              onClick={submitNewClient}
            >
              Ajouter
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={AnnulerClient}
            >
              Annuler
            </Button>
          </Grid>
    </div>
  );
}

export default AjouteClient;
