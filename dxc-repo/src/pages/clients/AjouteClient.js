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
    label: "",
    market: "",

    nomClientEror: "",
    labelEror: "",
    marketEror: "",
  };
  const [nomClient, setNomClient] = useState(initialClientState.nomClient);
  const [market, setMarket] = useState(initialClientState.market);
  const [label, setLabel] = useState(initialClientState.label);

  // Eror states
  const [nomClientEror, setNomClientEror] = useState(
    initialClientState.nomClientEror,
  );
  const [marketEror, setMarketEror] = useState(initialClientState.marketEror);
  const [labelEror, setLabelEror] = useState(initialClientState.labelEror);
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
    let labelEror = "";
    let marketEror = "";

    if (!nomClient) {
      nomClientEror = "le champ de nom de client  est obligatiore";
    }
    if (!label) {
      labelEror = "le champ de label  est obligatiore";
    }
    if (!market) {
      marketEror = "le champ de market est obligatiore";
    }

    if (nomClientEror || labelEror || marketEror) {
      setNomClientEror(nomClientEror);
      setLabelEror(labelEror);
      setMarketEror(marketEror);
    }
    if (
      nomClient.trim() === "" ||
      market.trim() === "" ||
      label.trim() === ""
    ) {
      errorValidation();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //créer un nouveau Client
    let client = {
      nomClient: nomClient,
      market: market,
      label: label,
    };
    addClient(client);
    history.push("/app/prestations/clients");
  };
  const AnnulerClient = () => {
    setNomClient(initialClientState.nomClient);
    setLabel(initialClientState.label);
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
          <Grid item xs={6}>
            <TextField
              id="outlined-label"
              label="Label"
              size="small"
              variant="outlined"
              fullWidth
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
                setLabelEror(initialClientState.labelEror);
              }}
            />
            <div style={{ color: "red" }}>{labelEror}</div>
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
