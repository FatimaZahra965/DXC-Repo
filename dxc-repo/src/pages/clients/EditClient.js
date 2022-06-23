import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { editClientAction } from "../../services/Actions/clientActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function EditClient(props) {
  const classes = useStyles();
  const history = useHistory();
  const initialClientState = {
    id: null,
    nomClient: "",
    market: "",
  };
  const editClient = (Client) => dispatch(editClientAction(Client));
  const [currentClient, setCurrentClient] = useState(initialClientState);

  // créer un nouveau Client
  const dispatch = useDispatch();
  const getClient = () => {
    axios
    .get(`https://dxcrepo-client.azurewebsites.net/DXC/clients/Client/`+props.match.params.id)
    .then((resp) => {
      console.log("hhhhkldmdmmdm",resp.data);
      setCurrentClient(resp.data);
      console.log("CurrentClient",currentClient); })
    .catch((error) => {
      console.log(error);
     
    });
  };

  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidacion = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());
  useEffect(() => {
    getClient(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentClient({ ...currentClient, [name]: value });
  };

  const updateContent = () => {
    console.log("currentClient", currentClient);

    validarForm();

    if (
      currentClient.nomClient.trim() === "" ||
      currentClient.market.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidacion();

    editClient(currentClient);
    history.push("/app/prestations/clients");
  };
  function AnnulerClient() {
    history.push("/app/prestations/clients");
  }

  return (
    <div>
      <div>
        <PageTitle title="Modifier un client" path="/app/prestations/clients" />
      </div>

      <form onSubmit={updateContent} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomContrat"
              label="Nom de Client"
              name="nomClient"
              size="small"
              variant="outlined"
              fullWidth
              value={currentClient.nomClient}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="market"
              name="market"
              size="small"
              variant="outlined"
              fullWidth
              value={currentClient.market}
              onChange={handleInputChange}
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
          onClick={updateContent}
        >
          Modifier
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

export default EditClient;
