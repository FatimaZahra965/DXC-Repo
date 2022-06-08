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
        `http://localhost:9003/DXC/contrats/Contrat/` + props.match.params.id,
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
   
      <form   className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
        <Grid item xs={12}  className={classes.labelinformation}>
        nom de contrat :<h3>{contrat.nomContrat}</h3></Grid>
          <Grid item xs={4}>
          <div>nom de client :</div>
          <div><h3>{contrat.nomClient}</h3></div>
          </Grid>
          <Grid item xs={4}>
        
          <div>date debut de contrat :</div>
          <div><h3>{contrat.dateDebut}</h3></div>
          </Grid>
          <Grid item xs={4}>
          <div>date fin de contrat :</div>
          <div><h3>{contrat.dateFin}</h3></div>
          </Grid>
          <Grid item xs={4}>
          <div>nom de client :</div>
          <div><h3>{contrat.nomClient}</h3></div>
          </Grid>
          

        
          
          
        </Grid>
      </form>
        
      </div>
    </div>
  );
}

export default ContratDetail;
