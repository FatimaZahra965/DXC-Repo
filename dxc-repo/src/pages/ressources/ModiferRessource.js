import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import PageTitle from "../../components/PageTitle/PageTitle";
import clienteAxios from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { editRessourceAction } from "../../services/Actions/ressourcesActions";
import {
  validacionError,
  validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import { useHistory } from "react-router-dom";

export default function ModiferRessource({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const initialRessourceState = {
    matricule: "",
    prenom: "",
    dateAmbauche: "",
    dateNaissance: "",
    status: "",
    genre: "",
  };
  // Ressource
  const dispatch = useDispatch();
  const editRessource = (ressource) => dispatch(editRessourceAction(ressource));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());
  const [ressourcedate, setRessourcedate] = useState(initialRessourceState);

  const { matricule } = match.params.id;

  useEffect(() => {
    console.log("matricule", match.params.id);
    clienteAxios
      .get(`https://dxcrepo-ressource.azurewebsites.net/DXC/ressource/${match.params.id}`)
      .then((resp) => {
        console.log("resp.data", resp.data);
        setRessourcedate(resp.data);
        console.log(ressourcedate);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(getRessourceAction(matricule));
  }, [matricule]);

  // const ressource = useSelector((state) => state.Ressources.Ressource);
  const error = useSelector((state) => state.error.error);

  const submitEditRessource = (e) => {
    e.preventDefault();

    validarForm();

    if (
      ressourcedate.matricule.trim() === "" ||
      ressourcedate.firstName.trim() === "" ||
      ressourcedate.lastName.trim() === "" ||
      ressourcedate.dateAmbauche.trim() === "" ||
      ressourcedate.dateNaissance.trim() === "" ||
      ressourcedate.status.trim() === "" ||
      ressourcedate.genre.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    SuccessValidation();

    let ressource = {
      Matricule: ressourcedate.matricule,
      Prenom: ressourcedate.firstName,
      Nom: ressourcedate.lastName,
      DateAmbauche: ressourcedate.dateAmbauche,
      DateNaissance: ressourcedate.dateNaissance,
      Status: ressourcedate.status,
      Genre: ressourcedate.genre,
    };
    console.log("ressource", ressource);

    editRessource(ressource);

    history.push("/app/prestations/ressources");
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRessourcedate({ ...ressourcedate, [name]: value });
  };
  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };
  return (
    <>
      <PageTitle title="Modifer Ressource" path="/app/prestations/ressources" />
      <form onSubmit={submitEditRessource}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Matricule"
              size="small"
              variant="outlined"
              fullWidth
              name="matricule"
              value={ressourcedate.matricule}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Status"
              size="small"
              variant="outlined"
              fullWidth
              name="status"
              value={ressourcedate.status}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Prénom"
              size="small"
              variant="outlined"
              fullWidth
              name="firstName"
              value={ressourcedate.firstName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Nom"
              size="small"
              variant="outlined"
              fullWidth
              name="lastName"
              value={ressourcedate.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Genre"
              size="small"
              fullWidth
              name="genre"
              value={ressourcedate.genre}
              onChange={handleInputChange}
            >
              <MenuItem key="1" value="homme">
                Homme
              </MenuItem>
              <MenuItem key="2" value="femme">
                Femme
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <label>Date d'ambauche</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              format="MM/DD/YYYY"
              fullWidth
              type="date"
              name="dateAmbauche"
              value={ressourcedate.dateAmbauche}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <label>Date de Naissance</label>
            <TextField
              id="outlined-basic"
              type="date"
              size="small"
              variant="outlined"
              fullWidth
              name="dateNaissance"
              value={ressourcedate.dateNaissance}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="small"
              type="submit"
              variant="contained"
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
    </>
  );
}
