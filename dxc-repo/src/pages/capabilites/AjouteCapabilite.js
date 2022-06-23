import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  Chip,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewCapabiliteAction } from "../../services/Actions/capabiliteActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
import { getRessourcesAction } from "../../services/Actions/ressourcesActions";
import { Alert } from "@material-ui/lab";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function AjouteCapabilite() {
  const classes = useStyles();
  const history = useHistory();
  // const loading = useSelector((state) => state.clients.loading);
  // const clients = useSelector((state) => state.clients.clients);
  useEffect(() => {
    const loadRessources = () => dispatch(getRessourcesAction());
    loadRessources();
  }, []);
  const ressources = useSelector((state) => state.ressources.ressources);
  console.log("ressources", ressources);

  const initialCapabiliteState = {
    id: null,
    matricule: "",
    intitule: "",
    description: "",

    intituleEror: "",
    matriculeEror: "",
    descriptionEror: "",
  };
  const [matricule, setMatricule] = useState(initialCapabiliteState.matricule);
  const [intitule, setIntitule] = useState(initialCapabiliteState.intitule);
  const [description, setDescription] = useState(
    initialCapabiliteState.description,
  );

  // Eror states
  const [matriculeEror, setMatriculeEror] = useState(
    initialCapabiliteState.matriculeEror,
  );
  const [intituleEror, setIntituleEror] = useState(
    initialCapabiliteState.intituleEror,
  );
  const [descriptionEror, setDescriptionEror] = useState(
    initialCapabiliteState.descriptionEror,
  );

  // créer un nouveau Capabilite
  const dispatch = useDispatch();
  const addCapabilite = (capabilite) =>
    dispatch(createNewCapabiliteAction(capabilite));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);
  const [doErr, setDoErr] = useState(false);

  // addnew Capabilite
  const submitNewCapabilite = (e) => {
    e.preventDefault();

    validarForm();
    let matriculeEror = "";
    let intituleEror = "";
    let descriptionEror = "";

    if (!matricule) {
      matriculeEror = "le champ de nom de Capabilite est obligatiore";
    }
    if (!intitule) {
      intituleEror = "le champ de nom de client  est obligatiore";
    }

    if (!description) {
      descriptionEror = "le champ de description est obligatiore";
    }
    if (matriculeEror || intituleEror || descriptionEror) {
      setMatriculeEror(matriculeEror);
      setIntituleEror(intituleEror);
      setDescriptionEror(descriptionEror);
      setDoErr(true);
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    let capabilite = {
      matricule: matricule,
      intitule: intitule,
      description: description,
      idRessources: personName,
    };
    console.log("--------------->", capabilite);
    addCapabilite(capabilite);
    history.push("/app/capabilites");
  };

  const AnnulerCapabilite = () => {
    setMatricule(initialCapabiliteState.matricule);
    setIntitule(initialCapabiliteState.intitule);
    setDescription(initialCapabiliteState.description);
  };
  const types = [
    {
      label: "Run",
      value: "Run",
    },
    {
      label: "Projet",
      value: "Projet",
    },
  ];

  // multiple select
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  return (
    <div>
      <PageTitle
        title="Ajouter un nouveau Capabilite"
        path="/app/capabilites"
      />
      <hr className={classes.hrGlobale}></hr>
      <Grid item xs={12} className={classes.Alert}>
        {error && doErr ? (
          <Alert severity="error">La capabilité n'est pas ajouté!</Alert>
        ) : null}
      </Grid>

      <form onSubmit={submitNewCapabilite} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-matricule"
              label="Matricule"
              size="small"
              variant="outlined"
              fullWidth
              value={matricule}
              onChange={(e) => {
                setMatricule(e.target.value);
                setMatriculeEror(initialCapabiliteState.matriculeEror);
                setDoErr(false);
              }}
            />
            <div style={{ color: "red" }}>{matriculeEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-intitule"
              label="Intitulé"
              size="small"
              fullWidth
              variant="outlined"
              value={intitule}
              onChange={(e) => {
                setIntitule(e.target.value);
                setIntituleEror(initialCapabiliteState.intituleEror);
                setDoErr(false);
              }}
            />

            <div style={{ color: "red" }}>{intituleEror}</div>
          </Grid>
          <Grid item xs={6} className={classes.inputSelect}>
            <InputLabel id="demo-multiple-chip-label">Ressources</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              fullWidth
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {ressources.map((name) => (
                <MenuItem
                  key={name.matricule}
                  value={name.matricule}
                  style={getStyles(name.firstName, personName, theme)}
                >
                  {`${name.firstName} ${name.lastName}`}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-description"
              label="Description"
              size="small"
              fullWidth
              multiline
              maxRows={3}
              minRows={3}
              variant="outlined"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionEror(initialCapabiliteState.descriptionEror);
                setDoErr(false);
              }}
            />
            <div style={{ color: "red" }}>{descriptionEror}</div>
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
          onClick={submitNewCapabilite}
        >
          Ajouter
        </Button>
        <Button
          size="small"
          variant="contained"
          className={classes.btnAnnuler}
          color="secondary"
          onClick={AnnulerCapabilite}
        >
          Annuler
        </Button>
      </Grid>
    </div>
  );
}

export default AjouteCapabilite;
