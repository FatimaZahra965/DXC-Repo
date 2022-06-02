import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
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

export default function ModiferPrestation({ match }) {
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

    typeEror: "",
    etatEror: "",
    dateDebutEror: "",
    dateFinEror: "",
    titreEror: "",
    marketEror: "",
  };
  // prestation
  const dispatch = useDispatch();
  const editPrestation = (prestation) =>
    dispatch(editPrestationAction(prestation));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

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

  const { id } = match.params;

  useEffect(() => {
    console.log("id", id);
    clienteAxios
      .get(`https://dxcrepo-prestation.azurewebsites.net/DXC/prestations/Prestation/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setPrestationdate(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(getPrestationAction(id));
  }, [id]);

  const prestation = useSelector((state) => state.prestations.prestation);
  const [prestationdate, setPrestationdate] = useState(initialPrestationState);
  const error = useSelector((state) => state.error.error);

  const submitEditPrestation = (e) => {
    e.preventDefault();

    let typeEror = "";
    let etatEror = "";
    let dateDebutEror = "";
    let dateFinEror = "";
    let titreEror = "";
    let marketEror = "";

    if (!prestationdate.type) {
      typeEror = "le champ Type de la prestation est obligatiore";
    }
    if (!prestationdate.titre) {
      titreEror = "le champ Titre de la prestation est obligatiore";
    }
    if (!prestationdate.market) {
      marketEror = "le champ Market de la prestation est obligatiore";
    }
    if (!prestationdate.dateDebut) {
      dateDebutEror = "le champ Date de début de la prestation est obligatiore";
    }
    if (!prestationdate.dateFin) {
      dateFinEror = "le champ Date de fin de la prestation est obligatiore";
    }
    if (!prestationdate.etat) {
      etatEror = "le champ Etat de la prestation est obligatiore";
    }

    if (
      typeEror ||
      titreEror ||
      marketEror ||
      dateDebutEror ||
      dateFinEror ||
      etatEror
    ) {
      setTitreEror(titreEror);
      setTypeEror(typeEror);
      setEtatEror(etatEror);
      setDateDebutEror(dateDebutEror);
      setDateFinEror(dateFinEror);
      setMarketEror(marketEror);

      errorValidacion();
      return;
    }
    SuccessValidation();

    let prestation = {
      id: id,
      titre: prestationdate.titre,
      etat: prestationdate.etat,
      market: prestationdate.market,
      type: prestationdate.type,
      dateDebut: prestationdate.dateDebut,
      dateFin: prestationdate.dateFin,
    };
    console.log("prestation", prestation);

    editPrestation(prestation);

    history.push("/app/prestations/ListePrestations");
  };
  // const submitEditPrestation = (e) => {
  //   e.preventDefault();

  //   validarForm();

  //   if (
  //     prestationdate.titre.trim() === "" ||
  //     prestationdate.etat.trim() === "" ||
  //     prestationdate.market.trim() === "" ||
  //     prestationdate.type.trim() === "" ||
  //     prestationdate.dateDebut.trim() === "" ||
  //     prestationdate.dateFin.trim() === ""
  //   ) {
  //     errorValidacion();
  //     return;
  //   }
  //   SuccessValidation();

  //   let prestation = {
  //     id: id,
  //     titre: prestationdate.titre,
  //     etat: prestationdate.etat,
  //     market: prestationdate.market,
  //     type: prestationdate.type,
  //     dateDebut: prestationdate.dateDebut,
  //     dateFin: prestationdate.dateFin,
  //   };
  //   console.log("prestation", prestation);

  //   editPrestation(prestation);

  //   history.push("/app/prestations/ListePrestations");
  // };

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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrestationdate({ ...prestationdate, [name]: value });
  };

  const dates = {
    dateFin: moment(prestationdate.dateFin).format("L"),
    dateDebut: moment(prestationdate.dateDebut).format("L"),
  };

  const annuler = () => {
    setPrestationdate(initialPrestationState);
  };
  return (
    <>
      <PageTitle
        title="Modifer une prestation"
        path="/app/prestations/ListePrestations"
      />
      <form onSubmit={submitEditPrestation}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              size="small"
              variant="outlined"
              fullWidth
              name="titre"
              value={prestationdate.titre}
              onChange={handleInputChange}
            />
            <div style={{ color: "red" }}>{TitreEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              variant="outlined"
              label="Etat"
              size="small"
              fullWidth
              name="etat"
              value={prestationdate.etat}
              onChange={handleInputChange}
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
              name="type"
              variant="outlined"
              value={prestationdate.type}
              onChange={handleInputChange}
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
              variant="outlined"
              label="Market"
              size="small"
              fullWidth
              name="market"
              value={prestationdate.market}
              onChange={handleInputChange}
            >
              {markets.map((market) => (
                <MenuItem key={market.value} value={market.value}>
                  {market.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{MarketEror}</div>
          </Grid>
          <Grid item xs={6}>
            <label>Date de début</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              fullWidth
              type="date"
              name="dateDebut"
              value={prestationdate.dateDebut}
              onChange={handleInputChange}
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
              name="dateFin"
              value={prestationdate.dateFin}
              onChange={handleInputChange}
            />
            <div style={{ color: "red" }}>{DateFinEror}</div>
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
        <Alert severity="error">La prestation n'est pas modifié!</Alert>
      ) : null}
    </>
  );
}
