import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { Button } from "@material-ui/core";
import useStyles from "./style";

export default function ModiferRessource() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Modifer Ressource" />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Matricule"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Status"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Prénom"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Nom"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-select-currency"
            select
            label="Genre"
            size="small"
            fullWidth
          >
            <MenuItem value="Homme">Homme</MenuItem>
            <MenuItem value="Femme">Femme</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <label>Date d'ambauche</label>
          <TextField
            id="outlined-basic"
            size="small"
            variant="outlined"
            fullWidth
            type="date"
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
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            size="small"
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
          >
            Annuler
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
