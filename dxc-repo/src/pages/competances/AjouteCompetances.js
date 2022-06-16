<<<<<<< HEAD
import React, { useState }  from "react";
=======
import React, { useEffect, useState }  from "react";
>>>>>>> abdelhadi
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { createNewCompetanceAction } from "../../services/Actions/competanceActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
  const loading = useSelector((state) => state.ressources.loading);
  const ressources = useSelector((state) => state.ressources.ressources);
  useEffect(() => {
    const loadRessources = () => dispatch(getRessourcesAction());
    loadRessources();
  }, []);
  const initialCompetanceState = {
    id: null,
    matriculeRessource: "",
    nomRessource: "",
    nomCompetance: "",
    niveau: "",
    evaluationManager: "",

    matriculeRessourceEror: "",
    nomRessourceEror: "",
    nomCompetanceEror: "",
    typeCompEror: "",
    niveauEror: "",
    evaluationManagerEror: "",
  };
  const [matriculeRessource, setMatriculeRessource] = useState(initialCompetanceState.matriculeRessource);
  const [nomRessource, setNomRessource] = useState(initialCompetanceState.nomRessource);
  const [nomCompetance, setNomCompetance] = useState(initialCompetanceState.nomCompetance);
  const [typeComp, setTypeComp] = useState(initialCompetanceState.typeComp);
  const [niveau, setNiveau] = useState(initialCompetanceState.niveau);
  const [evaluationManager, setEvaluationManager] = useState(initialCompetanceState.evaluationManager);
  
  // Eror states
  const [matriculeRessourceEror, setMatriculeRessourceEror] = useState(initialCompetanceState.matriculeRessourceEror);
  const [nomRessourceEror, setNomRessourceEror] = useState(initialCompetanceState.nomRessourceEror);
  const [nomCompetanceEror, setNomCompetanceEror] = useState(initialCompetanceState.nomCompetanceEror);
  const [typeCompEror, setTypeCompEror] = useState(initialCompetanceState.typeCompEror);
  const [niveauEror, setNiveauEror] = useState(initialCompetanceState.niveauEror);
  const [evaluationManagerEror, setEvaluationManagerEror] = useState(initialCompetanceState.evaluationManagerEror);

  
 // créer un nouveau Competance
  const dispatch = useDispatch();
  const addCompetance = (competance) =>
    dispatch(createNewCompetanceAction(competance));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew Competance
  const submitNewCompetance = (e) => {
    e.preventDefault();

    let matriculeRessourceEror = "";
    let nomRessourceEror = "";
    let nomCompetanceEror = "";
    let typeCompEror = "";
    let niveauEror = "";
    let evaluationManagerEror = "";


    if (!matriculeRessource) {
      matriculeRessourceEror = "le champ de matricule ressource est obligatiore";
    }
    if (!nomRessource) {
      nomRessourceEror = "le champ de nom de ressource  est obligatiore";
    }
    if (!nomCompetance) {
      nomCompetanceEror = "le champ de nom competence est obligatiore";
    }
    if (!typeComp) {
      typeCompEror = "le champ de type competence est obligatiore";
    }
    if (!niveau) {
      niveauEror = "le champ  de nveau est obligatiore";
    }
    if (!evaluationManager) {
      evaluationManagerEror = "le champ de evaluation Manager est obligatiore";
    }

    if (
      matriculeRessourceEror ||
      nomRessourceEror ||
      nomCompetanceEror ||
      typeCompEror ||
      niveauEror ||
      evaluationManagerEror
    ) {
      setMatriculeRessourceEror(matriculeRessourceEror);
      setNomRessourceEror(nomRessourceEror);
      setNomCompetanceEror(nomCompetanceEror);
      setTypeCompEror(typeCompEror);
      setNiveauEror(niveauEror);
      setEvaluationManagerEror(evaluationManagerEror);

      errorValidacion();
      return;
    }


    if (
      matriculeRessource.trim() === ""||
      nomRessource.trim() === ""||
      nomCompetance.trim() === ""||
      typeComp.trim() === ""||
      nomCompetance.trim() === ""||
      evaluationManager.trim() === ""||
      niveau.trim() === ""
   
    ) {
      errorValidacion();
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
      value: "Compétences techniques",
    },
    {
      label: "Compétences transversales",
      value: "Compétences transversales",
    },
    {
      label: "Compétences linguistiques",
      value: "Compétences linguistiques",
    },
  
  ];
  const GetMatricul = (e) => {
    console.log("fonction -----GetMatricul")
    axios
      .get(
        `http://localhost:9000/DXC/ressource/${e}`,
      )
      .then((resp) => {
        console.log("matricule", resp.data.matricule);
        setMatriculeRessource(resp.data.matricule);
        console.log("MatriculeRessource", matriculeRessource);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const GetMatricul= (e)=>{
  //   // e.preventDefault();
  //   console.log("get matricul ", e);
  //   getRessourceAction()
  // //   .then((resp) => {
  // //   setMatriculeRessource(resp.data.matricule);
  // //   console.log("matriculeRessource------->", matriculeRessource);
  // // })
  // }
  const annuler = () => {
    setNomRessource(initialCompetanceState.nomRessource);
    setNomCompetance(initialCompetanceState.nomCompetance);
    setMatriculeRessource(initialCompetanceState.matriculeRessource);
    setNiveau(initialCompetanceState.niveau);
    setEvaluationManager(initialCompetanceState.evaluationManager);
    setTypeComp(initialCompetanceState.typeComp);
  };
  return (
    <div>
      <div>
        <PageTitle title="Ajouter une nouvelle compétence" path="/app/competances/allCompetances" />
      </div>
      {error ? (
        <Alert severity="error">La competance n'est pas ajouté!</Alert>
      ) : null}
      <form onSubmit={submitNewCompetance} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
          <TextField
           id="outlined-nomRessource"
           label="Nom et prénom de ressource"
           select
           size="small"
           variant="outlined"
           fullWidth
           value={nomRessource}
           onChange={(e) =>{ setNomRessource(e.target.value);
            GetMatricul(e.target.value);
            setNomRessourceEror(initialCompetanceState.nomRessourceEror);}}
          >
          {ressources.map((ressource) => (
            <MenuItem value={ressource.matricule}>{ressource.firstName}{ressource.lastName}</MenuItem>
          ))}
          </TextField>
            <div style={{ color: "red" }}>{nomRessourceEror}</div>
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-matriculeRessource"
              label="Matricule de ressource"
              size="small"
              variant="outlined"
              fullWidth
              value={matriculeRessource}
              onChange={(e) =>{ setMatriculeRessource(e.target.value);
                setMatriculeRessourceEror(initialCompetanceState.matriculeRessourceEror);}}
              />
              <div style={{ color: "red" }}>{matriculeRessourceEror}</div>
            
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-typeComp"
              label="Type de compétence"
              select
              variant="outlined"
              size="small"
              fullWidth
              value={typeComp}
              onChange={(e) =>{ setTypeComp(e.target.value);
                setTypeCompEror(initialCompetanceState.typeCompEror);}}
            >
              {typesCompetances.map((typeCompetance) => (
                <MenuItem value={typeCompetance.value}>{typeCompetance.label}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{typeCompEror}</div>
          </Grid>
          

      
          <Grid item xs={6}>
          <TextField
              id="outlined-nomCompetance"
              label="Intitulé de compétence"
              size="small"
              variant="outlined"
              fullWidth
              value={nomCompetance}
            onChange={(e) =>{ setNomCompetance(e.target.value);
                setNomCompetanceEror(initialCompetanceState.nomCompetanceEror);}}
              />
              <div style={{ color: "red" }}>{nomCompetanceEror}</div>
          </Grid>

      
          <Grid item xs={6}>
          <TextField
              id="outlined-niveau"
              select
              label="Niveau  de maitrise attendu "
              variant="outlined"
              size="small"
              fullWidth
              value={niveau}
           
               onChange={(e) =>{ setNiveau(e.target.value);
              setNiveauEror(initialCompetanceState.niveauEror);}}
            >
           
              {niveaux.map((niveau) => (
                <MenuItem value={niveau.value}>{niveau.label}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{niveauEror}</div>
          </Grid>
      
          <Grid item xs={6}>
          <TextField
              id="outlined-evaluationManager"
              select
              label="Evaluation de manager"
              variant="outlined"
              size="small"
              fullWidth
              value={evaluationManager}
              onChange={(e) =>{ setEvaluationManager(e.target.value);
                setEvaluationManagerEror(initialCompetanceState.nevaluationManagerEror);}}
              >
             
          
              {niveaux.map((niveau) => (
                <MenuItem value={niveau.value}>{niveau.label}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{evaluationManagerEror}</div>
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
              onClick={() => {
                annuler();
              }}
            >
              Annuler
            </Button>
          </div>
    </div>
  );
}

export default AjouteCompetance;
