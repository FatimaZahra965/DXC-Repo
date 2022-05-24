import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewRessourceAction } from "../../services/Actions/ressourcesActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import Alert from "@material-ui/lab/Alert";

import moment from "moment";

export default function AjouterRessource() {
  const classes = useStyles();
  const history = useHistory();
  //state
  const [Matricule, getMatricule] = useState("");
  const [Status, getStatus] = useState("");
  const [Prenom, getPrenom] = useState("");
  const [Nom, getNom] = useState("");
  const [Genre, getGenre] = useState("homme");
  const [DateAmbauche, getDateAmbauche] = useState("");
  const [DateNaissance, getDateNaissance] = useState("");

  const dispatch = useDispatch();
  const addRessource = (ressource) =>
    dispatch(createNewRessourceAction(ressource));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  const error = useSelector((state) => state.error.error);

  const submitNewRessource = (e) => {
    e.preventDefault();

    validarForm();

    if (
      Matricule.trim() === "" ||
      Status.trim() === "" ||
      Nom.trim() === "" ||
      Prenom.trim() === "" ||
      Genre.trim() === "" ||
      DateAmbauche.trim() === "" ||
      DateNaissance.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    SuccessValidation();
    // const dates = {
    //   DateAmbauche: moment(DateAmbauche).format("L"),
    //   DateNaissance: moment(DateNaissance).format("L"),
    // };

    let ressource = {
      matricule: Matricule,
      status: Status,
      genre: Genre,
      dateNaissance: DateNaissance,
      lastName: Nom,
      firstName: Prenom,
      dateAmbauche: DateAmbauche,
    };
    console.log("ressource", ressource);
    addRessource(ressource);

    history.push("/app/prestations/ressources");
  };

  const options = [
    {
      label: "Homme",
      value: "homme",
    },
    {
      label: "Femme",
      value: "femme",
    },
  ];

  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };

  return (
    <>
      <PageTitle title="Ajouter Ressource" />
      <Grid item xs={12} className={classes.Alert}>
        {error ? (
          <Alert severity="error">Tous les champs sont requis!</Alert>
        ) : null}
      </Grid>

      <form onSubmit={submitNewRessource}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Matricule"
              size="small"
              variant="outlined"
              fullWidth
              valur={Matricule}
              onChange={(e) => getMatricule(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Status"
              size="small"
              variant="outlined"
              fullWidth
              valur={Status}
              onChange={(e) => getStatus(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Prénom"
              size="small"
              variant="outlined"
              fullWidth
              valur={Prenom}
              onChange={(e) => getPrenom(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Nom"
              size="small"
              variant="outlined"
              fullWidth
              valur={Nom}
              onChange={(e) => getNom(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Genre"
              size="small"
              fullWidth
              variant="outlined"
              valur={Genre}
              onChange={(e) => {
                getGenre(e.target.value);
              }}
            >
              {options.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <label>Date d'ambauche</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              type="date"
              valur={DateAmbauche}
              onChange={(e) => getDateAmbauche(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Date de Naissance</label>
            <TextField
              id="outlined-basic"
              type="date"
              size="small"
              variant="outlined"
              fullWidth
              valur={DateNaissance}
              onChange={(e) => getDateNaissance(e.target.value)}
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
    </>
  );
}
