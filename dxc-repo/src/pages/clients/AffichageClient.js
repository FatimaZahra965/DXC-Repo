import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import useStyles from "./styles";

function AffichageClient(props) {
  const classes = useStyles();
  const [client, setClient] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");

    axios
      .get(
        `https://dxcrepo-client.azurewebsites.net/DXC/clients/Client/` + props.match.params.id,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      )
      .then(function (res) {
        // handle success
        console.log("res", res.data);
        setClient(res.data);
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
          title="Affichage d'un Client"
          path="/app/prestations/clients"
        />
      </div>

      <div>
        <form className={classes.forminformation}>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.labelinformation}>
              <h3>nom de client </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{client.nomClient}</h3>
            </Grid>

            <Grid item xs={4} className={classes.labelinformation}>
              <h3>Market de client </h3>
            </Grid>
            <Grid item xs={6} className={classes.labelDonnes}>
              <h3>{client.market}</h3>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default AffichageClient;
