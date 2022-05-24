import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Alert } from "@material-ui/lab";
import { createNewPrestationAction } from "../../services/Actions/prestationsActions";
import {
  validacionError,
  validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function AjouterPrestation() {
  const classes = useStyles();
  const history = useHistory();
  //state
  const [Titre, getTitre] = useState("");
  const [Etat, getEtat] = useState("");
  const [Type, getType] = useState("");
  const [Market, getMarket] = useState("");
  const [DateDebut, getDateDebut] = useState("");
  const [DateFin, getDateFin] = useState("");
  const [valide, setValide] = useState(false);

  //crar nuevo producto
  const dispatch = useDispatch();
  const addPrestation = (prestation) =>
    dispatch(createNewPrestationAction(prestation));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  //obtener los datos del state
  const error = useSelector((state) => state.error.error);

  // addnew prestation
  const submitNewPrestation = (e) => {
    e.preventDefault();

    validarForm();

    if (
      Titre.trim() === "" ||
      Etat.trim() === "" ||
      Market.trim() === "" ||
      Type.trim() === "" ||
      DateDebut.trim() === "" ||
      DateFin.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();
    setValide(true);

    //crear el nuevo producto
    let prestation = {
      titre: Titre,
      etat: Etat,
      market: Market,
      type: Type,
      dateDebut: DateDebut,
      dateFin: DateFin,
    };
    addPrestation(prestation);

    history.push("/app/prestations/ListePrestations");
  };

  const etats = [
    {
      label: "En cours",
      value: "en_cours",
    },
    {
      label: "Clôture",
      value: "cloture",
    },
    {
      label: "Démarrage",
      value: "demarrage",
    },
  ];
  const markets = [
    {
      label: "Offshore",
      value: "offshore",
    },
    {
      label: "Local",
      value: "local",
    },
  ];
  const annuler = () => {
    let path = `/app/prestations/ListePrestations`;
    history.push(path);
  };
  return (
    <>
      <PageTitle title="Ajouter une prestation" />
      <form onSubmit={submitNewPrestation}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              size="small"
              variant="outlined"
              fullWidth
              valur={Titre}
              onChange={(e) => getTitre(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Etat"
              size="small"
              fullWidth
              variant="outlined"
              valur={Etat}
              onChange={(e) => {
                getEtat(e.target.value);
              }}
            >
              {etats.map((etat) => (
                <MenuItem value={etat.value}>{etat.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              size="small"
              fullWidth
              variant="outlined"
              valur={Type}
              onChange={(e) => {
                getType(e.target.value);
              }}
            >
              {etats.map((etat) => (
                <MenuItem value={etat.value}>{etat.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Market"
              size="small"
              variant="outlined"
              fullWidth
              valur={Market}
              onChange={(e) => {
                getMarket(e.target.value);
              }}
            >
              {markets.map((market) => (
                <MenuItem value={market.value}>{market.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <label>Date de début</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              type="date"
              valur={DateDebut}
              onChange={(e) => getDateDebut(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Date de Fin</label>
            <TextField
              id="outlined-basic"
              type="date"
              size="small"
              variant="outlined"
              fullWidth
              valur={DateFin}
              onChange={(e) => getDateFin(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              type="submit"
              className={classes.btnAjouter}
              color="primary"
            >
              Ajouter
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
          </Grid>
        </Grid>
      </form>
      {error ? (
        <Alert severity="error">Tous les champs sont requis!</Alert>
      ) : null}
    </>
  );
}
