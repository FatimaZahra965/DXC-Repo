import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewContratAction } from "../../services/Actions/contratActions";
import { getClientsAction } from "../../services/Actions/clientActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
function AjouteContrat() {
  const classes = useStyles();
  const history = useHistory();
  const loading = useSelector((state) => state.clients.loading);
  const clients = useSelector((state) => state.clients.clients);
  useEffect(() => {
    const loadClients = () => dispatch(getClientsAction());
    loadClients();
  }, []);
  const initialContratState = {
    id: null,
    nomContrat: "",
    nomClient: "",
    type: "",
    description: "",
    dateDebut:"",
    dateFin:"",
  
    nomClientEror: "",
    nomContrateEror: "",
    typeEror: "",
    descriptionEror: "",
    dateDebutEror:"",
    dateFinEror:"",
   };
  const [nomContrat, setNomContrat] = useState(initialContratState.nomContrat);
  const [nomClient, setNomClient] = useState(initialContratState.nomClient);
  const [type, setType] = useState(initialContratState.type);
  const [description, setDescription] = useState(initialContratState.description);
  const [dateDebut, setDateDebut] =useState(initialContratState.dateDebut);
  const [dateFin, setDateFin] = useState(initialContratState.dateFin);

  // Eror states
  const [nomContratEror, setNomContratEror] = useState(initialContratState.nomContratEror);
  const [nomClientEror, setNomClientEror] = useState(initialContratState.nomClientEror);
  const [typeEror, setTypeEror] = useState(initialContratState.typeEror);
  const [descriptionEror, setDescriptionEror] = useState(initialContratState.descriptionEror);
  const [dateDebutEror, setDateDebutEror] = useState(initialContratState.dateDebutEror);
  const [dateFinEror, setDateFinEror] = useState(initialContratState.dateFinEror);
 // créer un nouveau contrat
  const dispatch = useDispatch();
  const addContrat = (contrat) =>
    dispatch(createNewContratAction(contrat));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());

  //récupérer les données de l'état
  const error = useSelector((state) => state.error.error);

  // addnew contrat
  const submitNewContrat = (e) => {
    e.preventDefault();

    validarForm();
    let nomContratEror = "";
    let nomClientEror = "";
    let typeEror = "";
    let descriptionEror = "";
    let dateDebutEror ="";
    let dateFinEror ="";
    


    if (!nomContrat) {
      nomContratEror = "le champ de nom de contrat est obligatiore";
    }
    if (!nomClient) {
      nomClientEror = "le champ de nom de client  est obligatiore";
    }
    if (!type) {
      typeEror = "le champ de type de contrat  est obligatiore";
    }
    if (!description) {
      descriptionEror = "le champ de description est obligatiore";
    }
    if (!dateDebut) {
      dateDebutEror = "le champ de date Debut de le contrat est obligatiore";
    }
    if (!dateFin) {
      dateFinEror = "le champ de date fin de le contrat  est obligatiore";
    }

   

    if (
      nomContratEror ||
      nomClientEror ||
      typeEror ||
      descriptionEror ||
      dateDebutEror ||
      dateFinEror 
       
    ) {
      setNomContratEror(nomContratEror);
      setNomClientEror(nomClientEror);
      setTypeEror(typeEror);
      setDescriptionEror(descriptionEror);
      setDateDebutEror(dateDebutEror);
      setDateFinEror(dateFinEror);
    }
    if (
      nomContrat.trim() === "" ||
      nomClient.trim() === "" ||
      type.trim() === "" ||
      description.trim() === "" ||
      dateDebut.trim() === "" ||
      dateFin.trim() === "" 
   
    ) {
      errorValidation();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidation();

    //créer un nouveau contrat
    let contrat = {
      nomContrat : nomContrat,
      nomClient : nomClient,
      type : type,
      description :description,
      dateDebut :dateDebut,
      dateFin :dateFin,
      
    };
    addContrat(contrat);
    history.push("/app/prestations/Contrats");
  };
 
  const AnnulerContrat = () => {
    setNomContrat(initialContratState.nomContrat);
    setNomClient(initialContratState.nomClient);
    setType(initialContratState.type);
    setDescription(initialContratState.description);
    setDateDebut(initialContratState.dateDebut);
    setDateFin(initialContratState.dateFin);
  
    
  };
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
        <PageTitle title="Ajouter un nouveau contrat" path="/app/prestations/Contrats" />
      </div>
      <form onSubmit={submitNewContrat} className={classes.Form} >
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomContrat"
              label="Nom de Contrat"
              size="small"
              variant="outlined"
              fullWidth
              value={nomContrat}
                   onChange={(e) =>{ setNomContrat(e.target.value);
                setNomContratEror(initialContratState.nomContratEror);}}
              />
              <div style={{ color: "red" }}>{nomContratEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              size="small"
              fullWidth
              variant="outlined"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setTypeEror(initialContratState.typeEror);
              }}
            >
              {types.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{typeEror}</div>
          </Grid>
          <Grid item xs={6}>
          <TextField
          id="outlined-nomClient"
          label="Nom de Client"
          select
          variant="outlined"
          size="small"
          fullWidth
          value={nomClient}
          onChange={(e) =>{ setNomClient(e.target.value);
            setNomClientEror(initialContratState.nomClientEror);}}
          >
          {clients.map((client) => (
            <MenuItem value={client.nomClient}>{client.nomClient}</MenuItem>
          ))}
          </TextField>
          <div style={{ color: "red" }}>{nomClientEror}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-description"
              label="Description"
              size="small"
              fullWidth
              variant="outlined"
              value={description}
              onChange={(e) =>{ setDescription(e.target.value);
                setDescriptionEror(initialContratState.descriptionEror);}}
              />
              <div style={{ color: "red" }}>{descriptionEror}</div>
          </Grid>
          
          <Grid item xs={6}>
            <label>Date de début</label>
            <TextField
              id="outlined-basic"
              size="small"
              format="MM/dd/yyyy"
              variant="outlined"
              fullWidth
              type="date"
              value={dateDebut}
              onChange={(e) =>{ setDateDebut(e.target.value);
                setDateDebutEror(initialContratState.dateDebutEror);}}
              />
              <div style={{ color: "red" }}>{dateDebutEror}</div>
          </Grid>
          <Grid item xs={6}>
            <label>Date de Fin</label>
            <TextField
              id="outlined-basic"
              type="date"
              format="MM/dd/yyyy"
              size="small"
              variant="outlined"
              fullWidth
              value={dateFin}
              onChange={(e) =>{ setDateFin(e.target.value);
                setDateFinEror(initialContratState.dateFinEror);}}
              />
              <div style={{ color: "red" }}>{dateFinEror}</div>
            
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
              onClick={submitNewContrat}
            >
              Ajouter
            </Button>
            <Button
              size="small"
              variant="contained"
              className={classes.btnAnnuler}
              color="secondary"
              onClick={AnnulerContrat}
            >
              Annuler
            </Button>
          </Grid>
    </div>
  );
}

export default AjouteContrat;
