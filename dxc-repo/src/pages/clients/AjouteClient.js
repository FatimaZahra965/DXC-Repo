import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewClientAction } from "../../services/Actions/clientActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function AjouteClient() {
  const classes = useStyles();
  const history = useHistory();
  const initialClientState = {
    id: null,
    nomClient: "",
    fileClient: "",
    market: "",

    nomClientEror: "",
    fileClientEror: "",
    marketEror: "",
  };
  const [nomClient, setNomClient] = useState(initialClientState.nomClient);
  const [market, setMarket] = useState(initialClientState.market);
  const [fileClient, setFileClient] = useState(initialClientState.fileClient);

  // Eror states
  const [nomClientEror, setNomClientEror] = useState(
    initialClientState.nomClientEror,
  );
  const [marketEror, setMarketEror] = useState(initialClientState.marketEror);
  const [fileClientEror, setFileClientEror] = useState(initialClientState.fileClientEror);
  // créer un nouveau Client
  const dispatch = useDispatch();
  const addClient = (client) => dispatch(createNewClientAction(client));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew Client
  const submitNewClient = (e) => {
    e.preventDefault();

    validarForm();
    let nomClientEror = "";
    let fileClientEror = "";
    let marketEror = "";

    if (!nomClient) {
      nomClientEror = "le champ de nom de client  est obligatiore";
    }
    if (!market) {
      marketEror = "le champ de market est obligatiore";
    }

    if (nomClientEror || fileClientEror || marketEror) {
      setNomClientEror(nomClientEror);
      setFileClientEror(fileClientEror);
      setMarketEror(marketEror);
    }
    SuccessValidation();

    //créer un nouveau Client
    let client = {
      nomClient: nomClient,
      market: market,
      fileClient: fileClient,
    };
    addClient(client);
    history.push("/app/prestations/clients");
  };
  const AnnulerClient = () => {
    setNomClient(initialClientState.nomClient);
    setFileClient(initialClientState.fileClient);
    setMarket(initialClientState.market);
  };

  const markets = [
    {
      label: "Offshore ",
      value: "offshore ",
    },
    {
      label: "Local",
      value: "local",
    },
  ];
  return (
    <div>
      <div>
        <PageTitle title="Ajoute Client" path="/app/prestations/clients" />
      </div>
      <form onSubmit={submitNewClient} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Nom de Client"
              size="small"
              variant="outlined"
              fullWidth
              value={nomClient}
              onChange={(e) => {
                setNomClient(e.target.value);
                setNomClientEror(initialClientState.nomClientEror);
              }}
            />
            <div style={{ color: "red" }}>{nomClientEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-market"
              label="Market"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={market}
              onChange={(e) => {
                setMarket(e.target.value);
                setMarketEror(initialClientState.marketEror);
              }}
            >
              {markets.map((market) => (
                <MenuItem value={market.value}>{market.label}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{marketEror}</div>
          </Grid>
          {/* <Grid item xs={6}>
          <label>Logo de client</label>
            <TextField
              type="file"
              id="logo-client"
              size="small"
              variant="outlined"
              fullWidth
              value={fileClient}
              onChange={(info) => {
                setFileClient(info.target.files[0]);
              }}
            />
            <div style={{ color: "red" }}>{fileClientEror}</div>
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
