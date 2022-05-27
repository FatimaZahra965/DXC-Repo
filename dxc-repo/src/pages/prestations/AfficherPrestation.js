import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Alert } from "@material-ui/lab";
import { editPrestationAction } from "../../services/Actions/prestationsActions";
import {
  validacionError,
  validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import PageTitle from "../../components/PageTitle/PageTitle";
import clienteAxios from "../../config/axios";

export default function AfficherPrestation({ match }) {
  const classes = useStyles();
  const history = useHistory();

  //state
  const initialPrestationState = {
    id: null,
    type: "",
    etat: "",
    dateDebut: "",
    dateFin: "",
    titre: "",
    market: "",
  };
  // prestation

  const { id } = match.params;

  useEffect(() => {
    console.log("id", id);
    clienteAxios
      .get(`http://localhost:9002/DXC/prestations/Prestation/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setPrestationdate(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(getPrestationAction(id));
  }, [id]);

  // const prestation = useSelector((state) => state.prestations.prestation);
  const [prestationdate, setPrestationdate] = useState(initialPrestationState);
  // const error = useSelector((state) => state.error.error);

  return (
    <>
      <PageTitle
        title={`Voire les détails de prestation ${prestationdate.titre}`}
        path="/app/prestations/ListePrestations"
      />

      <Grid container>
        <Grid item xs={3}>
          <p>
            {" "}
            <b className={classes.bText}>Titre:</b> {prestationdate.titre}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p>
            {" "}
            <b className={classes.bText}>Market:</b> {prestationdate.market}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p>
            {" "}
            <b className={classes.bText}>Type:</b> {prestationdate.type}
          </p>
        </Grid>
        <Grid item xs={3}>
          <p>
            {" "}
            <b className={classes.bText}>Etat:</b> {prestationdate.etat}
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            {" "}
            <b className={classes.bText}>Date de Début:</b>{" "}
            {prestationdate.dateDebut}
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            {" "}
            <b className={classes.bText}>Date de Fin:</b>{" "}
            {prestationdate.dateFin}
          </p>
        </Grid>
      </Grid>
    </>
  );
}
