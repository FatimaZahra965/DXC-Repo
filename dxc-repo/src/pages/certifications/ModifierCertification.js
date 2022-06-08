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
import clienteAxios from "../../config/axios";

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

  const [imageCertificat, setImageCertificat] = useState("");
  const [Img, setImg] = useState("");
  const [file, setFile] = useState("");

  const [fileEror, setFileEror] = useState("");

  const [CodeEror, setCodeEror] = useState("");
  const [TitreEror, setTitreEror] = useState("");
  const [DateCertificationEror, setDateCertificationEror] = useState("");
  const [NiveauEror, setNiveauEror] = useState("");

  const error = useSelector((state) => state.error.error);

  const { id } = match.params;
  const [certificationdata, setcertificationdata] = useState(initialState);

  useEffect(() => {
    console.log("------------------->", id);
    // dispatch(getcertificationAction(id));
    //1 a remplacer avec l'id de la ressource qui va venir apartir de reoute
    clienteAxios
      .get(
        "http://localhost:9001/dxc/certifications/certificat/" + 1 + "/" + id,
      )
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
    //1 a remplacer avec l'id de la ressource qui va venir apartir de reoute
    clienteAxios
      .post("http://localhost:9001/files/addFile/1", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setFileEror(error);
      });
  };

  const submitEditcertification = (e) => {
    e.preventDefault();
    validarForm();

    const form = new FormData();
    if (imageCertificat) {
      form.append("image", imageCertificat, imageCertificat.name);
      console.log("------------>", imageCertificat);
    }

    validarForm();
    let codeEror = "";
    let niveauEror = "";
    let datecertificationEror = "";
    let titreEror = "";

    if (!certificationdata.code) {
      codeEror = "le champ code de la certification est obligatiore";
    }
    if (!certificationdata.niveau) {
      niveauEror = "le champ Niveau de la certification est obligatiore";
    }
    if (!certificationdata.datecertification) {
      datecertificationEror = "le champ date de certification est obligatiore";
    }
    if (!certificationdata.titre) {
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
    const dates = {
      dateCetification: moment(certificationdata).format("yyyy-MM-DD"),
    };
    let certification = {
      id,
      code: certificationdata.code,
      titre: certificationdata.titre,
      niveau: certificationdata.niveau,
      datecertification: dates.dateCetification,
      ressourceid: 1,
    };
    console.log(certification);
    uploadFile(e);
    editcertification(certification);

    history.push("/app/certifications/ListeCertifications");
  };

  const handlchange = (event) => {
    const { name, value } = event.target;
    setcertificationdata({ ...certificationdata, [name]: value });
  };

  const Annuler = () => {
    history.push("/app/certifications/ListeCertifications");
  };
  return (
    <>
      <PageTitle
        title="Modifer une certification"
        path="/app/certifications/ListeCertifications"
      />
       <form onSubmit={submitEditcertification} className={classes.Form} >
        <Grid container spacing={3} className={classes.GridForm}></Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              name="titre"
              size="small"
              variant="outlined"
              fullWidth
              value={certificationdata.titre}
              onChange={(e) => {
                handlchange(e);
                setTitreEror("");
              }}
            />
            <div style={{ color: "red" }}>{TitreEror}</div>
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
              onChange={(e) => {
                handlchange(e);
                setCodeEror("");
              }}
            />
            <div style={{ color: "red" }}>{CodeEror}</div>
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
              value={certificationdata.niveau}
              onChange={(e) => {
                handlchange(e);
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
              onChange={(e) => {
                handlchange(e);
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
              Modifer
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={(e) => {
                Annuler(e);
              }}
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
