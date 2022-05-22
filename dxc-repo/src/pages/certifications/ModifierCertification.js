import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Alert } from "@material-ui/lab";
import {
  editcertificationAction,
  getcertificationAction,
} from "../../services/Actions/certificationsActions";
import {
  validacionError,
  validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import PageTitle from "../../components/PageTitle/PageTitle";
import moment from "moment";
import axios from "axios";

const ModiferCertification = ({ match }) => {
  const initialState = {
    id: null,
    code: "",
    niveau: "",
    validation: "",
    type: "",
    dateCertification: "",
  };
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const editcertification = (certification) =>
    dispatch(editcertificationAction(certification));

  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  const error = useSelector((state) => state.error.error);
  //get id
  const { id } = match.params;
  const [certificationdata, setcertificationdata] = useState(initialState);

  useEffect(() => {
    console.log("------------------->", id);
    // dispatch(getcertificationAction(id));

    axios
      .get("http://localhost:8081/DXC/certifications/certification/" + id)
      .then(function (response) {
        // handle success
        console.log("response---------------->", response.data);
        setcertificationdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [dispatch, id]);

  const certification = useSelector(
    (state) => state.certifications.certification,
  );

  const dates = {
    dateCetification: moment(certificationdata.dateCetification).format(
      "YYYY-MM-DD",
    ),
  };

  //cuando carga la APi
  if (!certification) return "Cargando...";

  const submitEditcertification = (e) => {
    e.preventDefault();

    validarForm();

    if (
      certificationdata.titre.trim() === "" ||
      certificationdata.etat.trim() === "" ||
      certificationdata.market.trim() === "" ||
      certificationdata.type.trim() === "" ||
      certificationdata.dateDebut.trim() === "" ||
      certificationdata.dateFin.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    SuccessValidation();

    let certification = {
      id,
      titre: certificationdata.titre,
      etat: certificationdata.etat,
      market: certificationdata.market,
      type: certificationdata.type,
      dateDebut: certificationdata.dateDebut,
      dateFin: certificationdata.dateFin,
    };
    console.log(certification);
    editcertification(certification);

    history.push("/app/certifications/allcertifications");
  };

  const handlchange = (event) => {
    const { name, value } = event.target;
    setcertificationdata({ ...certificationdata, [name]: value });
  };

  const Annuler = () => {
    history.push("/app/certifications/allcertifications");
  };
  return (
    <>
      <PageTitle title="Modifer une certification" />
      <form onSubmit={submitEditcertification}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              name="titre"
              size="small"
              variant="outlined"
              fullWidth
              value={certificationdata.titre}
              onChange={handlchange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Code"
              name="code"
              size="small"
              variant="outlined"
              fullWidth
              value={certificationdata.code}
              onChange={handlchange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Niveau"
              name="niveau"
              size="small"
              variant="outlined"
              fullWidth
              value={certificationdata.niveau}
              onChange={handlchange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Validation"
              name="validation"
              size="small"
              variant="outlined"
              fullWidth
              value={certificationdata.validation}
              onChange={handlchange}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Date de Cetification</label>
            <TextField
              id="outlined-basic"
              type="date"
              name="dateCetification"
              size="small"
              variant="outlined"
              fullWidth
              value={dates.dateCetification}
              onChange={handlchange}
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
              Modifer
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={Annuler}
            >
              Annuler
            </Button>
          </Grid>
        </Grid>
      </form>
      {error ? (
        <Alert severity="error">Tous les champs sont obligatiore!</Alert>
      ) : null}
    </>
  );
};
export default ModiferCertification;
