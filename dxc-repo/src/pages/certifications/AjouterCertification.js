import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Alert } from "@material-ui/lab";
import { createNewcertificationAction } from "../../services/Actions/certificationsActions";
import {
  validacionError,
  validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function AjouterCertification() {
  const classes = useStyles();
  const history = useHistory();
  //state
  const [code, setCode] = useState("");
  const [titre, setTitre] = useState("");
  const [datecertification, setDatecertification] = useState("");
  const [niveau, setNiveau] = useState("");
  const [validation, setValidation] = useState("");

  //crar nuevo producto
  const dispatch = useDispatch();
  const addcertification = (certification) =>
    dispatch(createNewcertificationAction(certification));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  //obtener los datos del state
  const error = useSelector((state) => state.error.error);

  // addnew certification
  const submitNewCertification = (e) => {
    e.preventDefault();

    validarForm();

    if (
      code.trim() === "" ||
      titre.trim() === "" ||
      datecertification.trim() === "" ||
      niveau.trim() === "" ||
      validation.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //crear el nuevo producto
    let certification = {
      code: code,
      titre: titre,
      niveau: niveau,
      validation: validation,
      datecertification: datecertification,
      ressourceid: "ressourceid",
    };
    addcertification(certification);

    //history.push("/app/certifications/allcertifications");
  };

  return (
    <>
      <PageTitle title="Ajouter une certification" />
      <form onSubmit={submitNewCertification} className={classes.Form} >
        <Grid container spacing={3} className={classes.GridForm}>
      
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Code"
              size="small"
              variant="outlined"
              fullWidth
              valur={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              size="small"
              variant="outlined"
              fullWidth
              valur={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Niveau"
              size="small"
              variant="outlined"
              fullWidth
              valur={niveau}
              onChange={(e) => setNiveau(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Validation"
              size="small"
              variant="outlined"
              fullWidth
              valur={validation}
              onChange={(e) => setValidation(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Date de certification</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              type="date"
              valur={datecertification}
              onChange={(e) => setDatecertification(e.target.value)}
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
