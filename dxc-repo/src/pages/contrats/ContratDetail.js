import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import useStyles from "./styles";

function ContratDetail(props) {
  const classes = useStyles();
  const [contrat, setContrat] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://dxcrepo-contrat.azurewebsites.net/DXC/contrats/Contrat/` + props.match.params.id,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      )
      .then(function (res) {
        // handle success
        console.log("res", res.data);
     
        setContrat(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <div>
      <div>
        <PageTitle
          title="Afficher d'un Contrat"
          path="/app/prestations/contrats"
        />
      </div>

      <div>
        <form className={classes.Form}>
          <Grid container spacing={3} className={classes.GridForm}>
            <Grid item xs={4} className={classes.labelinformation}>
              <h3>nom de contrat </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{contrat.nomContrat}</h3>
            </Grid>

            <Grid item xs={4} className={classes.labelinformation}>
              <h3>nom de client </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{contrat.nomClient}</h3>
            </Grid>

            <Grid item xs={4} className={classes.labelinformation}>
              <h3>description de contrat </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{contrat.description}</h3>
            </Grid>

            <Grid item xs={4} className={classes.labelinformation}>
              <h3>type d'activité </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{contrat.type}</h3>
            </Grid>

            <Grid item xs={4} className={classes.labelinformation}>
              <h3>date debut de contrat </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{contrat.dateDebut}</h3>
            </Grid>

            <Grid item xs={4} className={classes.labelinformation}>
              <h3>date fin de contrat </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{contrat.dateFin}</h3>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default ContratDetail;
