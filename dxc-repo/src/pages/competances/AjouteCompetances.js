import React, { useState }  from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewCompetanceAction } from "../../services/Actions/competanceActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function AjouteCompetance() {
  const classes = useStyles();
  const history = useHistory();
  const [matriculeRessource, setMatriculeRessource] = useState("");
  const [nomRessource, setNomRessource] = useState("");
  const [nomCompetance, setNomCompetance] = useState("");
  const [typeComp, setTypeComp] = useState("");
  const [niveau, setNiveau] = useState("");
  const [evaluationManager, setEvaluationManager] = useState("");
  
  
 // créer un nouveau Competance
  const dispatch = useDispatch();
  const addCompetance = (competance) =>
    dispatch(createNewCompetanceAction(competance));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew Competance
  const submitNewCompetance = (e) => {
    e.preventDefault();

    validarForm();

    if (
      matriculeRessource.trim() === ""||
      nomRessource.trim() === ""||
      nomCompetance.trim() === ""||
      typeComp.trim() === ""||
      nomCompetance.trim() === ""||
      evaluationManager.trim() === ""||
      niveau.trim() === ""
   
    ) {
      errorValidation();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //créer un nouveau Competance
    let competance = {
      nomCompetance : nomCompetance,
      matriculeRessource : matriculeRessource,
      nomRessource : nomRessource,
      typeComp : typeComp,
      evaluationManager : evaluationManager,
      niveau : niveau
      
    };
    addCompetance(competance);
    history.push("/app/competances/allCompetances");
  };
  
  const niveaux = [
   
    {
      label: "NE - Non Exigé.",
      value: "Non Exigé",
    },
    {
      label: "0 - Pas de connaissances",
      value: "Pas de connaissances",
    },
    {
      label: "1 - Connaissances théoriques",
      value: "Connaissances théoriques",
    },
    {
      label: "2 - Basique",
      value: "Basique",
    },
    {
      label: "3 - Maitrisé ",
      value: "Maitrisé",
    },
    {
      label: "4 - Expert",
      value: "Expert",
    },
  ];
  const typesCompetances = [
    {
      label: "Compétences techniques",
      value: "CompetenceTechn",
    },
    {
      label: "Compétences transversales",
      value: "CompetenceTrans",
    },
    {
      label: "Compétences linguistiques",
      value: "CompetenceLing",
    },
  
  ];
  function AnnulerCompetance() {
    history.push("/app/competances/allCompetances");
  }
  return (
    <div>
      <div>
        <PageTitle title="Ajouter une nouvelle compétence" path="/app/competances/allCompetances" />
      </div>
      <form onSubmit={submitNewCompetance}>
        <Grid container spacing={3}>
        <Grid item xs={4}  className={classes.label}>
          <h3>Nom et prénom de ressource </h3>  
          </Grid>
      
          <Grid item xs={6}>
            <TextField
              id="outlined-nomRessource"
              // label="Nom et prénom de ressource"
              size="small"
              variant="outlined"
              fullWidth
              value={nomRessource}
              onChange={(e) => setNomRessource(e.target.value)}
            />
          </Grid>
        

             <Grid item xs={4}  className={classes.label}>
          <h3>Matricule de ressource </h3>  
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-matriculeRessource"
              size="small"
              variant="outlined"
              fullWidth
              value={matriculeRessource}
              onChange={(e) => setMatriculeRessource(e.target.value)}
            />
          </Grid>
         
      

          <Grid item xs={4}  className={classes.label}>
          <h3>Type de compétence </h3>  
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-typeComp"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={typeComp}
              onChange={(e) => {
                setTypeComp(e.target.value);
              }}
            >
              {typesCompetances.map((typeCompetance) => (
                <MenuItem value={typeCompetance.value}>{typeCompetance.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          


          <Grid item xs={4}  className={classes.label}>
          <h3>Intitulé de compétence</h3>  
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-nomCompetance"
              size="small"
              variant="outlined"
              fullWidth
              value={nomCompetance}
              onChange={(e) => setNomCompetance(e.target.value)}
            />
          </Grid>
          

          <Grid item xs={4}  className={classes.label}>
          <h3>Niveau  de maitrise attendu </h3>  
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-niveau"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={niveau}
              onChange={(e) => {
                setNiveau(e.target.value);
              }}
            >
              {niveaux.map((niveau) => (
                <MenuItem value={niveau.value}>{niveau.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          

          <Grid item xs={4}  className={classes.label}>
          <h3>Evaluation de manager</h3>  
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-evaluationManager"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={evaluationManager}
              onChange={(e) => setEvaluationManager(e.target.value)}
            >
              {niveaux.map((niveau) => (
                <MenuItem value={niveau.value}>{niveau.label}</MenuItem>
              ))}
            </TextField>
         
          </Grid>
          
        </Grid>
      </form>
      <div className={classes.buttons}  >
            <Button
              size="small"
              variant="contained"
              type="submit"
              className={classes.btnAjouter}
              color="primary"
              onClick={submitNewCompetance}
            >
              Ajouter
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={AnnulerCompetance}
            >
              Annuler
            </Button>
          </div>
    </div>
  );
}

export default AjouteCompetance;
