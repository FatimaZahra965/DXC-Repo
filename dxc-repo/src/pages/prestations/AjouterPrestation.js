import React, { useEffect, useState } from "react";
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
import moment from "moment";
import { getActivitesAction } from "../../services/Actions/activitesActions";
import clienteAxios from "../../config/axios";

export default function AjouterPrestation() {
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
    nomActvite: "",

    typeEror: "",
    etatEror: "",
    dateDebutEror: "",
    dateFinEror: "",
    titreEror: "",
    marketEror: "",
    nomActviteEror: "",
  };
  const [Titre, setTitre] = useState(initialPrestationState.titre);
  const [Etat, setEtat] = useState(initialPrestationState.etat);
  const [Type, setType] = useState(initialPrestationState.type);
  const [Market, setMarket] = useState(initialPrestationState.market);
  const [DateDebut, setDateDebut] = useState(initialPrestationState.dateDebut);
  const [DateFin, setDateFin] = useState(initialPrestationState.dateFin);
  const [NomActvite, setNomActvite] = useState(
    initialPrestationState.nomPrestation,
  );

  // Eror states
  const [TitreEror, setTitreEror] = useState(initialPrestationState.titreEror);
  const [EtatEror, setEtatEror] = useState(initialPrestationState.etatEror);
  const [TypeEror, setTypeEror] = useState(initialPrestationState.typeEror);
  const [MarketEror, setMarketEror] = useState(
    initialPrestationState.marketEror,
  );
  const [DateDebutEror, setDateDebutEror] = useState(
    initialPrestationState.dateDebutEror,
  );
  const [DateFinEror, setDateFinEror] = useState(
    initialPrestationState.dateFinEror,
  );
  const [NomActviteEror, setNomActviteEror] = useState(
    initialPrestationState.nomActvite,
  );

  const dispatch = useDispatch();
  const addPrestation = (prestation) =>
    dispatch(createNewPrestationAction(prestation));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  const error = useSelector((state) => state.error.error);

  const [presActivites, setPresActivites] = useState([]);
  useEffect(() => {
    // const loadActivites = () => dispatch(getActivitesAction());
    // loadActivites();

    clienteAxios
      .get("https://dxcrepo-activite.azurewebsites.net/dxc/activites/allNotAffectedActivites")
      .then((resp) => {
        //console.log("rerpprpprppr", resp.data);
        setPresActivites(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const activites = useSelector((state) => state.activites.activites);

  const submitNewPrestation = (e) => {
    e.preventDefault();

    let typeEror = "";
    let etatEror = "";
    let dateDebutEror = "";
    let dateFinEror = "";
    let titreEror = "";
    let marketEror = "";
    let nomactvite = "";

    if (!Type || !new RegExp(/^\w+$/).test(Type)) {
      typeEror = "le champ Type de la prestation est obligatiore";
    }
    if (!Titre || !new RegExp(/^\w+$/).test(Titre)) {
      titreEror = "le champ Titre de la prestation est obligatiore";
    }
    if (!Market || !new RegExp(/^\w+$/).test(Market)) {
      marketEror = "le champ Market de la prestation est obligatiore";
    }
    if (!DateDebut) {
      dateDebutEror = "le champ Date de début de la prestation est obligatiore";
    }
    if (!DateFin) {
      dateFinEror = "le champ Date de fin de la prestation est obligatiore";
    }
    if (!Etat || !new RegExp(/^\w+$/).test(Etat)) {
      etatEror = "le champ Etat de la prestation est obligatiore";
    }
    if (!NomActvite || !new RegExp(/^\w+$/).test(NomActvite)) {
      nomactvite = "le champ Activité de la prestation est obligatiore";
    }

    if (
      typeEror ||
      titreEror ||
      marketEror ||
      dateDebutEror ||
      dateFinEror ||
      etatEror ||
      nomactvite
    ) {
      setTitreEror(titreEror);
      setTypeEror(typeEror);
      setEtatEror(etatEror);
      setDateDebutEror(dateDebutEror);
      setDateFinEror(dateFinEror);
      setMarketEror(marketEror);
      setNomActviteEror(nomactvite);

      errorValidacion();
      return;
    }
    SuccessValidation();

    const dates = {
      dateDebut: moment(DateDebut).format("yyyy-MM-DD"),
      dateFin: moment(DateFin).format("yyyy-MM-DD"),
    };

    let prestation = {
      titre: Titre,
      etat: Etat,
      market: Market,
      type: Type,
      dateDebut: dates.dateDebut,
      dateFin: dates.dateFin,
      idActivite: NomActvite,
    };
    console.log("prestation", prestation);
    addPrestation(prestation);

    // history.push("/app/prestations/ListePrestations");
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
  const types = [
    {
      label: "Interne",
      value: "Interne",
    },
    {
      label: "Externe",
      value: "Externe",
    },
  ];
  const annuler = () => {
    setTitre(initialPrestationState.titre);
    setDateDebut(initialPrestationState.dateDebut);
    setDateFin(initialPrestationState.dateFin);
    setEtat(initialPrestationState.etat);
    setMarket(initialPrestationState.market);
    setType(initialPrestationState.type);
  };

  return (
    <>
      <PageTitle
        title="Ajouter une prestation"
        path="/app/prestations/ListePrestations"
      />
      <form onSubmit={submitNewPrestation}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              size="small"
              variant="outlined"
              fullWidth
              value={Titre}
              onChange={(e) => {
                setTitre(e.target.value);
                setTitreEror(initialPrestationState.titreEror);
              }}
            />
            <div style={{ color: "red" }}>{TitreEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Activité"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={NomActvite}
              onChange={(e) => {
                setNomActvite(e.target.value);
                setNomActviteEror(initialPrestationState.nomActviteEror);
              }}
            >
              {presActivites.map((activite) => (
                <MenuItem value={activite.id}>{activite.nomActivite}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{NomActviteEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Etat"
              size="small"
              fullWidth
              variant="outlined"
              value={Etat}
              onChange={(e) => {
                setEtat(e.target.value);
                setEtatEror(initialPrestationState.etatEror);
              }}
            >
              {etats.map((etat) => (
                <MenuItem key={etat.value} value={etat.value}>
                  {etat.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{EtatEror}</div>
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
                setTypeEror(initialPrestationState.typeEror);
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
                setDateDebutEror(initialPrestationState.dateDebutEror);
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
                setDateFinEror(initialPrestationState.dateFinEror);
              }}
            />
            <div style={{ color: "red" }}>{DateFinEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Market"
              size="small"
              variant="outlined"
              fullWidth
              value={Market}
              onChange={(e) => {
                setMarket(e.target.value);
                setMarketEror(initialPrestationState.marketEror);
              }}
            >
              {markets.map((market) => (
                <MenuItem key={market.value} value={market.value}>
                  {market.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{MarketEror}</div>
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
        <Alert severity="error">La prestation n'est pas ajouté!</Alert>
      ) : null}
    </>
  );
}
