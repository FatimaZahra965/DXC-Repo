import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import {
  validacionError,
  validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import PageTitle from "../../components/PageTitle/PageTitle";
import moment from "moment";
import { createNewActiviteAction } from "../../services/Actions/activitesActions";
import { getPrestationsAction } from "../../services/Actions/prestationsActions";

export default function AjouterActivite() {
  const classes = useStyles();
  const history = useHistory();
  //state
  const initialActiviteState = {
    id: null,
    type: "",
    dateDebut: "",
    dateFin: "",
    nom: "",
    status: "",
    categorie: "",
    description: "",
    nomPrestation: "",

    typeEror: "",
    dateDebutEror: "",
    dateFinEror: "",
    nomEror: "",
    statusEror: "",
    categorieEror: "",
    descriptionEror: "",
    nomPrestationEror: "",
  };
  const [Nom, setNom] = useState(initialActiviteState.nom);
  const [Type, setType] = useState(initialActiviteState.type);
  const [Status, setStatus] = useState(initialActiviteState.status);
  const [DateDebut, setDateDebut] = useState(initialActiviteState.dateDebut);
  const [DateFin, setDateFin] = useState(initialActiviteState.dateFin);
  const [Categorie, setCategorie] = useState(initialActiviteState.categorie);
  const [Description, setDescription] = useState(
    initialActiviteState.description,
  );
  const [NomPrestation, setNomPrestation] = useState(
    initialActiviteState.nomPrestation,
  );

  // Eror states
  const [NomEror, setNomEror] = useState(initialActiviteState.nomEror);
  const [TypeEror, setTypeEror] = useState(initialActiviteState.typeEror);
  const [StatusEror, setStatusEror] = useState(initialActiviteState.statusEror);
  const [DateDebutEror, setDateDebutEror] = useState(
    initialActiviteState.dateDebutEror,
  );
  const [DateFinEror, setDateFinEror] = useState(
    initialActiviteState.dateFinEror,
  );
  const [CategrorieEror, setCategorieEror] = useState(
    initialActiviteState.categorieEror,
  );
  const [DescriptionEror, setDescriptionEror] = useState(
    initialActiviteState.description,
  );
  const [NomPrestationEror, setNomPrestationEror] = useState(
    initialActiviteState.description,
  );

  //crar nuevo producto
  const dispatch = useDispatch();
  const addActivite = (activite) => dispatch(createNewActiviteAction(activite));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  //obtener los datos del state
  const error = useSelector((state) => state.error.error);
  useEffect(() => {
    const loadProducts = () => dispatch(getPrestationsAction());
    loadProducts();
  }, []);
  const prestations = useSelector((state) => state.prestations.prestations);
  const submitNewActivite = (e) => {
    e.preventDefault();

    let typeEror = "";
    let dateDebutEror = "";
    let dateFinEror = "";
    let nomEror = "";
    let statusEror = "";
    let categorieEror = "";
    let descriptionEror = "";
    let nomPrestationEror = "";

    if (!Type) {
      typeEror = "Le champ Type de l'activite est obligatiore";
    }
    if (!Nom) {
      nomEror = "Le champ l'intitulé de l'activité est obligatiore";
    }
    if (!Status) {
      statusEror = "Le champ status de l'activite est obligatiore";
    }
    if (!Categorie) {
      categorieEror = "Le champ Categorie de l'activite est obligatiore";
    }
    if (!DateDebut) {
      dateDebutEror = "Le champ Date de début de l'activite est obligatiore";
    }
    if (!DateFin) {
      dateFinEror = "Le champ Date de fin de l'activite est obligatiore";
    }
    if (!Description) {
      descriptionEror = "Le champ Description de l'activite est obligatiore";
    }
    if (!NomPrestation) {
      nomPrestationEror = "Le champ Prestation est obligatiore";
    }

    if (
      typeEror ||
      nomEror ||
      statusEror ||
      dateDebutEror ||
      dateFinEror ||
      categorieEror ||
      descriptionEror ||
      nomPrestationEror
    ) {
      setNomEror(nomEror);
      setTypeEror(typeEror);
      setDateDebutEror(dateDebutEror);
      setDateFinEror(dateFinEror);
      setStatusEror(statusEror);
      setCategorieEror(categorieEror);
      setDescriptionEror(descriptionEror);
      setNomPrestationEror(nomPrestationEror);

      errorValidacion();
      return;
    }
    SuccessValidation();

    const dates = {
      dateDebut: moment(DateDebut).format("yyyy-MM-DD"),
      dateFin: moment(DateFin).format("yyyy-MM-DD"),
    };
    let activite = {
      nomActivite: Nom,
      status: Status,
      typeActivite: Type,
      categorie: Categorie,
      dateDebut: dates.dateDebut,
      dateFin: dates.dateFin,
      description: Description,
      idPrestation: NomPrestation,
    };
    console.log("------------>", activite);
    addActivite(activite);

    history.push("/app/prestations/activites");
  };
  const category = [
    {
      label: "Facturable",
      value: "Facturable",
    },
    {
      label: "Non facturable",
      value: "Non_facturable",
    },
    {
      label: "Inactivité",
      value: "Inactivite",
    },
    {
      label: "Congé",
      value: "Conge",
    },
  ];
  const status = [
    {
      label: "Demarrage",
      value: "Demarrage",
    },
    {
      label: "Suivi",
      value: "Suivi",
    },
    {
      label: "Clôture",
      value: "Cloture",
    },
  ];
  const types = [
    {
      label: "Projet",
      value: "Projet",
    },
    {
      label: "Run",
      value: "Run",
    },
    {
      label: "Build",
      value: "Build",
    },
  ];
  const annuler = () => {
    setNom(initialActiviteState.nom);
    setDateDebut(initialActiviteState.dateDebut);
    setDateFin(initialActiviteState.dateFin);
    setStatus(initialActiviteState.status);
    setType(initialActiviteState.type);
    setCategorie(initialActiviteState.categorie);
    setDescription(initialActiviteState.description);
    setNomPrestation(initialActiviteState.nomPrestation);
  };

  return (
    <>
      <PageTitle title="Crée une Activité" path="/app/prestations/activites" />
      <hr className={classes.hrGlobale}></hr>
      <Grid item xs={12} className={classes.Alert}>
        {error ? (
          <Alert severity="error">L'activité n'est pas ajouté!</Alert>
        ) : null}
      </Grid>
      <form onSubmit={submitNewActivite} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="L'intitulé de l’activité"
              size="small"
              variant="outlined"
              fullWidth
              value={Nom}
              onChange={(e) => {
                setNom(e.target.value);
                setNomEror(initialActiviteState.nomEror);
              }}
            />
            <div style={{ color: "red" }}>{NomEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Prestation"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={NomPrestation}
              onChange={(e) => {
                setNomPrestation(e.target.value);
                setNomPrestationEror(initialActiviteState.nomPrestationEror);
              }}
            >
              {prestations.map((prestation) => (
                <MenuItem value={prestation.id}>{prestation.titre}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{NomPrestationEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              size="small"
              fullWidth
              variant="outlined"
              value={Type}
              onChange={(e) => {
                setType(e.target.value);
                setTypeEror(initialActiviteState.typeEror);
              }}
            >
              {types.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{TypeEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Catégorie"
              size="small"
              fullWidth
              variant="outlined"
              value={Categorie}
              onChange={(e) => {
                setCategorie(e.target.value);
                setCategorieEror(initialActiviteState.categorieEror);
              }}
            >
              {category.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{CategrorieEror}</div>
          </Grid>

          <Grid item xs={6}>
            <label>Date de début</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              type="date"
              value={DateDebut}
              onChange={(e) => {
                setDateDebut(e.target.value);
                setDateDebutEror(initialActiviteState.dateDebutEror);
              }}
            />
            <div style={{ color: "red" }}>{DateDebutEror}</div>
          </Grid>
          <Grid item xs={6}>
            <label>Date de Fin</label>
            <TextField
              id="outlined-basic"
              type="date"
              size="small"
              variant="outlined"
              fullWidth
              value={DateFin}
              onChange={(e) => {
                setDateFin(e.target.value);
                setDateFinEror(initialActiviteState.dateFinEror);
              }}
            />
            <div style={{ color: "red" }}>{DateFinEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="status"
              size="small"
              variant="outlined"
              fullWidth
              value={Status}
              onChange={(e) => {
                setStatus(e.target.value);
                setStatusEror(initialActiviteState.statusEror);
              }}
            >
              {status.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{StatusEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              size="small"
              variant="outlined"
              fullWidth
              multiline
              maxRows={3}
              minRows={3}
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionEror(initialActiviteState.descriptionEror);
              }}
            />
            <div style={{ color: "red" }}>{DescriptionEror}</div>
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
