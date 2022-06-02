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
import clienteAxios from "../../config/axios";
import moment from "moment";

export default function AjouterCertification() {
  const classes = useStyles();
  const history = useHistory();
  //state
  const [code, setCode] = useState("");
  const [titre, setTitre] = useState("");
  const [datecertification, setDatecertification] = useState("");
  const [niveau, setNiveau] = useState("");
  const [imageCertificat, setImageCertificat] = useState("");
  const [Img, setImg] = useState("");
  const [file, setFile] = useState("");

  const [CodeEror, setCodeEror] = useState("");
  const [TitreEror, setTitreEror] = useState("");
  const [DateCertificationEror, setDateCertificationEror] = useState("");
  const [NiveauEror, setNiveauEror] = useState("");
  const [fileEror, setFileEror] = useState("");

  const dispatch = useDispatch();
  const addcertification = (certification) =>
    dispatch(createNewcertificationAction(certification));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  const error = useSelector((state) => state.error.error);

  //upload file
  const uploadFile = (event) => {
    event.preventDefault();
    if (!file) {
      setFileEror("Please upload a file.");
      return;
    }

    if (file.size >= 2000000) {
      setFileEror("File size exceeds limit of 2MB.");
      return;
    }
    let data = new FormData();
    data.append("file", file);
    data.append("name", file.name);
    clienteAxios
      .post("http://localhost:9001/files/addFile/1", data)
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((error) => {
        console.log(error);
        setFileEror(error);
      });
  };
  // addnew certification
  const submitNewCertification = (e) => {
    e.preventDefault();

    validarForm();
    let codeEror = "";
    let niveauEror = "";
    let datecertificationEror = "";
    let titreEror = "";

    if (!code) {
      codeEror = "le champ code de la certification est obligatiore";
    }
    if (!niveau) {
      niveauEror = "le champ Niveau de la certification est obligatiore";
    }
    if (!datecertification) {
      datecertificationEror = "le champ date de certification est obligatiore";
    }
    if (!titre) {
      titreEror = "le champ titre de la certification est obligatiore";
    }
    if (codeEror || niveauEror || datecertificationEror || titreEror) {
      setCodeEror(codeEror);
      setTitreEror(titreEror);
      setNiveauEror(niveauEror);
      setDateCertificationEror(datecertificationEror);
      errorValidacion();
      return;
    }
    SuccessValidation();
    console.log("date", datecertification.slice(0, 10));
    const dates = {
      dateCetification: moment(datecertification).format("yyyy-MM-DD"),
    };
    let certification = {
      code: code,
      titre: titre,
      niveau: niveau,
      datecertification: dates.dateCetification,
      ressourceid: 1,
    };
    uploadFile(e);
    addcertification(certification);
    // history.push("/app/certifications/ListeCertifications");
  };

  return (
    <>
      <PageTitle
        title="Ajouter une certification"
        path="/app/certifications/ListeCertifications"
      />
      <form onSubmit={submitNewCertification}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Code"
              size="small"
              variant="outlined"
              fullWidth
              valur={code}
              onChange={(e) => {
                setCode(e.target.value);
                setCodeEror("");
              }}
            />
            <div style={{ color: "red" }}>{CodeEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              size="small"
              variant="outlined"
              fullWidth
              valur={titre}
              onChange={(e) => {
                setTitre(e.target.value);
                setTitreEror("");
              }}
            />
            <div style={{ color: "red" }}>{TitreEror}</div>
          </Grid>

          <Grid item xs={6}>
            <TextField
              className={classes.textField}
              id="outlined-select-currency"
              select
              label="Niveau de maitrise"
              size="small"
              fullWidth
              name="niveau"
              variant="outlined"
              value={niveau}
              onChange={(e) => {
                setNiveau(e.target.value);
                setNiveauEror("");
              }}
            >
              <MenuItem key="0" value="NE">
                NE - Non Exigé
              </MenuItem>
              <MenuItem key="1" value="0">
                0 - pas de connaissances
              </MenuItem>
              <MenuItem key="2" value="1">
                1 - connaissances théoriques
              </MenuItem>
              <MenuItem key="3" value="2">
                2 - Basique
              </MenuItem>
              <MenuItem key="4" value="3">
                3 - Maitrisé
              </MenuItem>
              <MenuItem key="5" value="4">
                4 - Expert{" "}
              </MenuItem>
            </TextField>
            <div style={{ color: "red" }}>{NiveauEror}</div>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <label>Image de certification</label>
            <TextField
              size="small"
              variant="outlined"
              fullWidth
              type="file"
              id="upload-photo"
              selected={Img}
              valur={imageCertificat}
              onChange={(info) => {
                setFile(info.target.files[0]);
              }}
            />
            <div style={{ color: "red" }}>{fileEror}</div>
          </Grid>
          <Grid item xs={6}>
            <label>Date de certification</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              format="dd-MM-yyyy"
              type="date"
              valur={datecertification}
              onChange={(e) => {
                setDatecertification(e.target.value);
                setDateCertificationEror("");
              }}
            />
            <div style={{ color: "red" }}>{DateCertificationEror}</div>
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
        <Alert severity="error">La certif n'est pas ajouté!</Alert>
      ) : null}
    </>
  );
}
