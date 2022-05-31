import React, { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContratAction, getContratAction } from "../../services/Actions/contratActions";
import { validacionError, validationSuccess,validarFormularioAction} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
import axios from "axios";

function EditContrat(props) {
  const classes = useStyles();
  const history = useHistory();
  const initialContratState = {
    id: null,
    nomClient: "",
    nomContrat: "",
    description: "",
    type: "",
    dateDebut: "",
    dateFin: ""
  };
  const editContrat = (Contrat)=> dispatch(editContratAction(Contrat));
  const [currentContrat, setCurrentContrat] = useState(initialContratState);
  const [message, setMessage] = useState("");


 // créer un nouveau contrat
  const dispatch = useDispatch();
  const getContrat = () => {
    axios
    .get(`http://localhost:9003/DXC/contrats/Contrat/`+props.match.params.id)
    .then((resp) => {
      console.log("hhhhkldmdmmdm",resp.data);
      setCurrentContrat(resp.data);
      console.log("CurrentContrat",currentContrat); })
    .catch((error) => {
      console.log(error);
     
    });
  };

  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidacion = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());
  useEffect(() => {
    getContrat(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentContrat({ ...currentContrat, [name]: value });
  };


  const updateContent = () => {
    console.log("currentContrat",currentContrat);

    validarForm();

    if (
      currentContrat.nomClient.trim() === "" ||
      currentContrat.nomContrat.trim() === "" ||
      currentContrat.description.trim() === ""||
      currentContrat.type.trim() === ""||
      currentContrat.dateDebut.trim() === ""||
      currentContrat.dateFin.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidacion();

    editContrat(currentContrat);
         history.push("/app/prestations/Contrats");
      

  };
  function AnnulerContrat() {
    history.push("/app/prestations/Contrats");
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
        <PageTitle title="Modifier un contrat" path="/app/prestations/Contrats" />
      </div>
      <form onSubmit={updateContent}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomContrat"
              label="Nom de Contrat"
              name="nomContrat"
              size="small"
              variant="outlined"
              fullWidth
              value={currentContrat.nomContrat}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              size="small"
              fullWidth
              variant="outlined"
              value={currentContrat.type}
              onChange={handleInputChange} >
              {types.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Nom de Client"
              name="nomClient"
              size="small"
              variant="outlined"
              fullWidth
              value={currentContrat.nomClient}
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
              value={currentContrat.description}
              onChange={handleInputChange}
            />
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
              value={currentContrat.dateDebut}
              onChange={handleInputChange}
              
              />
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
              value={currentContrat.dateFin}
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
              onClick={AnnulerContrat}
            >
              Annuler
            </Button>
          </Grid>
    </div>
  );
}

export default EditContrat;
