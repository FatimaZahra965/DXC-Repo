import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  editCapabiliteAction,
  // getCapabiliteAction,
} from "../../services/Actions/capabiliteActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
import axios from "axios";

function EditCapabilite(props) {
  const classes = useStyles();
  const history = useHistory();
  const initialCapabiliteState = {
    id: null,
    intitule: "",
    matricule: "",
    description: "",
  };
  const editCapabilite = (Capabilite) =>
    dispatch(editCapabiliteAction(Capabilite));
  const [currentCapabilite, setCurrentCapabilite] = useState(
    initialCapabiliteState,
  );
  // const [message, setMessage] = useState("");

  // créer un nouveau Capabilite
  const dispatch = useDispatch();
  const getCapabilite = () => {
    axios
      .get(
        `https://localhost:9008/DXC/capabilites/Capabilite/` +
          props.match.params.id,
      )
      .then((resp) => {
        console.log("hhhhkldmdmmdm", resp.data);
        setCurrentCapabilite(resp.data);
        console.log("CurrentCapabilite", currentCapabilite);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidacion = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());
  useEffect(() => {
    getCapabilite(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCapabilite({ ...currentCapabilite, [name]: value });
  };

  const updateContent = () => {
    console.log("currentCapabilite", currentCapabilite);

    validarForm();

    if (
      currentCapabilite.intitule.trim() === "" ||
      currentCapabilite.matricule.trim() === "" ||
      currentCapabilite.description.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidacion();

    editCapabilite(currentCapabilite);
    history.push("/app/capabilites");
  };
  function AnnulerCapabilite() {
    history.push("/app/capabilites");
  }
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

  return (
    <div>
      <div>
        <PageTitle title="Modifier un Capabilite" path="/app/capabilites" />
      </div>
      <form onSubmit={updateContent}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-matricule"
              label="Matricule"
              name="matricule"
              size="small"
              variant="outlined"
              fullWidth
              value={currentCapabilite.matricule}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-intitule"
              label="Intitulé"
              name="intitule"
              size="small"
              variant="outlined"
              fullWidth
              value={currentCapabilite.intitule}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-description"
              label="Description"
              name="description"
              size="small"
              variant="outlined"
              fullWidth
              value={currentCapabilite.description}
              onChange={handleInputChange}
            />
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
          onClick={updateContent}
        >
          Modifier
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

export default EditCapabilite;
