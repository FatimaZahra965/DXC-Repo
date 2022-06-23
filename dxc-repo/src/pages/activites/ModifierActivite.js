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
import {
  createNewActiviteAction,
  editActiviteAction,
} from "../../services/Actions/activitesActions";
import { Category } from "@material-ui/icons";
import clienteAxios from "../../config/axios";

export default function ModifierActivite({ match }) {
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

    typeEror: "",
    dateDebutEror: "",
    dateFinEror: "",
    nomEror: "",
    nomEror1: "",
    statusEror: "",
    categorieEror: "",
    descriptionEror: "",
  };

  const { id } = match.params;
  const [Activitiedata, setActivitiedata] = useState(initialActiviteState);
  // Eror states
  const [NomEror, setNomEror] = useState(initialActiviteState.nomEror);
  const [NomEror1, setNomEror1] = useState(initialActiviteState.nomEror1);
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

  //crar nuevo producto
  const dispatch = useDispatch();
  const addActivite = (activite) => dispatch(createNewActiviteAction(activite));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  //obtener los datos del state
  const error = useSelector((state) => state.error.error);
  const [doErr, setDoErr] = useState(false);

  useEffect(() => {
    clienteAxios
      .get(
        "https://dxcrepo-activite.azurewebsites.net/dxc/activites/Activite/" +
          id,
      )
      .then(function (response) {
        console.log("response---------------->", response.data);
        setActivitiedata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [dispatch, id]);

  const submitNewActivite = (e) => {
    e.preventDefault();

    let typeEror = "";
    let dateDebutEror = "";
    let dateFinEror = "";
    let nomEror = "";
    let nomEror1 = "";
    let statusEror = "";
    let categorieEror = "";
    let descriptionEror = "";

    if (!Activitiedata.type) {
      typeEror = "Le champ Type de l'activite est obligatiore";
    }
    if (!Activitiedata.nomActivite) {
      nomEror = "Le champ l'intitulé de l'activité est obligatiore";
    }
    if (!new RegExp(/^\w+$/).test(Activitiedata.nomActivite)) {
      nomEror1 =
        "Merci de saisir un texte valide, les caractères spéciaux ne sont pas acceptés";
    }
    if (!Activitiedata.status) {
      statusEror = "Le champ status de l'activite est obligatiore";
    }
    if (!Activitiedata.categorie) {
      categorieEror = "Le champ Categorie de l'activite est obligatiore";
    }
    if (!Activitiedata.dateDebut) {
      dateDebutEror = "Le champ Date de début de l'activite est obligatiore";
    }
    if (!Activitiedata.dateFin) {
      dateFinEror = "Le champ Date de fin de l'activite est obligatiore";
    }
    if (
      !Activitiedata.description ||
      !new RegExp(/^\w+$/).test(Activitiedata.description)
    ) {
      descriptionEror = "Le champ Description de l'activite est obligatiore";
    }

    if (
      typeEror ||
      nomEror ||
      statusEror ||
      dateDebutEror ||
      dateFinEror ||
      categorieEror ||
      descriptionEror ||
      nomEror1
    ) {
      setNomEror(nomEror);
      setTypeEror(typeEror);
      setDateDebutEror(dateDebutEror);
      setDateFinEror(dateFinEror);
      setStatusEror(statusEror);
      setCategorieEror(categorieEror);
      setDescriptionEror(descriptionEror);
      setNomEror1(nomEror1);

      errorValidacion();
      setDoErr(true);
      return;
    }
    SuccessValidation();

    const dates = {
      dateDebut: moment(Activitiedata.dateDebut).format("yyyy-MM-DD"),
      dateFin: moment(Activitiedata.dateFin).format("yyyy-MM-DD"),
    };
    let activite = {
      nom: Activitiedata.nom,
      status: Activitiedata.status,
      type: Activitiedata.type,
      categorie: Activitiedata.categorie,
      dateDebut: dates.dateDebut,
      dateFin: dates.dateFin,
      description: Activitiedata.description,
    };
    editActiviteAction(activite);

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
    history.push("/app/prestations/activites");
  };
  const handlchange = (event) => {
    const { name, value } = event.target;
    setActivitiedata({ ...Activitiedata, [name]: value });
  };
  return (
    <>
      <PageTitle
        title="Modifié une Activité"
        path="/app/prestations/activites"
      />

      <hr className={classes.hrGlobale}></hr>
      <Grid item xs={12} className={classes.Alert}>
        {error && doErr ? (
          <Alert severity="error">L'activité n'est pas modifiée!</Alert>
        ) : null}
      </Grid>
      <form onSubmit={submitNewActivite}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="L'intitulé de l’activité"
              size="small"
              variant="outlined"
              fullWidth
              name="nomActivite"
              value={Activitiedata.nomActivite}
              onChange={(e) => {
                handlchange(e);
                setNomEror(initialActiviteState.nomEror);
                setNomEror1(initialActiviteState.nomEror1);
                setDoErr(false);
              }}
            />
            <div style={{ color: "red" }}>{NomEror}</div>
            <div style={{ color: "red" }}>{NomEror1}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              size="small"
              fullWidth
              name="type"
              variant="outlined"
              value={Activitiedata.typeActivite}
              onChange={(e) => {
                handlchange(e);
                setTypeEror(initialActiviteState.typeEror);
                setDoErr(false);
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
              name="categorie"
              variant="outlined"
              value={Activitiedata.categorie}
              onChange={(e) => {
                handlchange(e);
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
            <TextField
              id="outlined-select-currency"
              select
              label="status"
              size="small"
              name="status"
              variant="outlined"
              fullWidth
              value={Activitiedata.status}
              onChange={(e) => {
                handlchange(e);
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
            <label>Date de début</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              name="dateDebut"
              type="date"
              value={Activitiedata.dateDebut}
              onChange={(e) => {
                handlchange(e);
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
              name="dateFin"
              fullWidth
              value={Activitiedata.dateFin}
              onChange={(e) => {
                handlchange(e);
                setDateFinEror(initialActiviteState.dateFinEror);
              }}
            />
            <div style={{ color: "red" }}>{DateFinEror}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              size="small"
              variant="outlined"
              fullWidth
              multiline
              maxRows={5}
              minRows={5}
              name="description"
              value={Activitiedata.description}
              onChange={(e) => {
                handlchange(e);
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
              Modifier
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
