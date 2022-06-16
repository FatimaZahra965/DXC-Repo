import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getActivitesAction } from "../../../services/Actions/activitesActions.js";
import useStyles from "../styles.js";
import { useDispatch } from "react-redux";
import clienteAxios from "../../../config/axios.js";
import Swal from "sweetalert2";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
export default function ModalAddActivite(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [IdActvite, setIdActvite] = useState("");
  const [presActivites, setPresActivites] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    clienteAxios
      .get("https://dxcrepo-activite.azurewebsites.net/dxc/activites/allNotAffectedActivites")
      .then((resp) => {
        console.log("rerpprpprppr", resp.data);
        setPresActivites(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const submitNewPrestation = (idActivite) => {
    idActivite.preventDefault();
    let data = {
      idPrestation: props.idPrestation,
      idActivite: IdActvite,
    };
    console.log("data ---------->", data);
    clienteAxios
      .put(
        `https://dxcrepo-activite.azurewebsites.net/dxc/activites/affectActivite/${data.idActivite}/${data.idPrestation}`,
        data,
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          timer: 3000,
          text: "La prestation est ajouter avec succés",
          timeerProgressBar: true,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        //si hay un error
      });
  };
  const annuler = () => {};

  return (
    <Grid container spacing={3}>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Affecter une activité</h2>
        <form onSubmit={submitNewPrestation}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Activité"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={IdActvite}
              onChange={(e) => {
                setIdActvite(e.target.value);
                // setNomActviteEror(initialPrestationState.nomActviteEror);
              }}
            >
              {presActivites.map((activite) => (
                <MenuItem value={activite.id}>{activite.nomActivite}</MenuItem>
              ))}
            </TextField>
            {/* <div style={{ color: "red" }}>{NomActviteEror}</div> */}
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
        </form>
      </div>
    </Grid>
  );
}
