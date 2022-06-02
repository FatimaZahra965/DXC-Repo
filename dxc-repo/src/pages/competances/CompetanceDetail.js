import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import useStyles from "./styles";
function CompetanceDetail(props) {
    const classes = useStyles();
  const [competance, setCompetance] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");
    
    axios
<<<<<<< Updated upstream
      .get(
        `https://dxcrepo-competance.azurewebsites.net/DXC/competances/Competance/` +
          props.match.params.id,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      )
=======
      .get(`http://localhost:9005/DXC/competances/Competance/`+props.match.params.id, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
>>>>>>> Stashed changes
      .then(function (res) {
        // handle success
        console.log("res competance jjsjsksls", res.data);
        setCompetance(res.data);
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
          title="Tous les information de competance"
          path="/app/competances/allCompetances" 
        />
      </div>

      <div class="demo">
      <form  className={classes.Form} >
    <Grid container spacing={3} className={classes.GridForm}>
        <Grid item xs={4}  >
          <h3>Nom et prénom de ressource </h3>  
          </Grid>
          <Grid item xs={6}>
           <h3>{competance.nomRessource}</h3>
          </Grid>

             <Grid item xs={4}  >
          <h3>Matricule de ressource </h3>  
          </Grid>
          <Grid item xs={6}>
              <h3>{competance.matriculeRessource}</h3>
          </Grid>


          <Grid item xs={4}  >
          <h3>Type de compétence </h3>  
          </Grid>
          <Grid item xs={6}>
          <h3>{competance.typeComp}</h3>
          
          </Grid>
          

          <Grid item xs={4}  >
          <h3>Intitulé de compétence</h3>  
          </Grid>
          <Grid item xs={6}>
          <h3>{competance.nomCompetance}</h3>
          </Grid>
          

          <Grid item xs={4}  >
          <h3>Niveau  de maitrise attendu </h3>  
          </Grid>
          <Grid item xs={6}>
          <h3>{competance.niveau}</h3>
          </Grid>
          

          <Grid item xs={4}  >
          <h3>Evaluation de manager</h3>  
          </Grid>
         
          <Grid item xs={6}> 
          <h3>{competance.evaluationManager}</h3>
          </Grid>
          
        </Grid>
      </form>
        
      </div>
    </div>
  );
}

export default CompetanceDetail;