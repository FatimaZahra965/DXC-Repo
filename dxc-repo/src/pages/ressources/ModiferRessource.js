import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import PageTitle from "../../components/PageTitle/PageTitle";
import clienteAxios from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { editRessourceAction } from "../../services/Actions/ressourcesActions";
import {
  validacionError,
  // validarFormularioAction,
  validationSuccess,
} from "../../services/Actions/validacionActions";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Alert from "@material-ui/lab/Alert";

export default function ModiferRessource({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const initialRessourceState = {
    matricule: "",
    prenom: "",
    nom: "",
    dateambauche: "",
    datenaissance: "",
    status: "",
    genre: "",
    profilefacturation: "",
  };
  // Ressource
  const dispatch = useDispatch();
  const editRessource = (ressource) => dispatch(editRessourceAction(ressource));
  // const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());
  const [ressourcedate, setRessourcedate] = useState(initialRessourceState);

  const [MatriculeEror, setMatriculeEror] = useState("");
  const [StatusEror, setStatusEror] = useState("");
  const [PrenomEror, setPrenomEror] = useState("");
  const [NomEror, setNomEror] = useState("");
  const [GenreEror, setGenreEror] = useState("");
  const [DateAmbaucheEror, setDateAmbaucheEror] = useState("");
  const [DateNaissanceEror, setDateNaissanceEror] = useState("");
  const [ProfilEror, setProfilEror] = useState("");

  const { matricule } = match.params.id;

  useEffect(() => {
    clienteAxios
      .get(
        `https://dxcrepo-ressource.azurewebsites.net/DXC/ressource/${match.params.id}`,
      )
      .then((resp) => {
        setRessourcedate(resp.data);
        // console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(getRessourceAction(matricule));
  }, []);

  // const ressource = useSelector((state) => state.Ressources.Ressource);
  const error = useSelector((state) => state.error.error);
  const [doErr, setDoErr] = useState(false);

  const submitEditRessource = (e) => {
    e.preventDefault();
    // validarForm();
    let matriculeEror = "";
    let statusEror = "";
    let genreEror = "";
    let nomEror = "";
    let prenomEror = "";
    let profilEror = "";
    let dateNaissanceEror = "";
    let dateAmbaucheEror = "";

    if (
      !ressourcedate.matricule ||
      !new RegExp(/^\w+$/).test(ressourcedate.matricule)
    ) {
      matriculeEror = "le champ Matricule de la ressource est obligatiore";
    }
    if (!ressourcedate.status) {
      statusEror = "le champ Status de la ressource est obligatiore";
    }
    if (!ressourcedate.genre) {
      genreEror = "le champ Genre de la ressource est obligatiore";
    }
    if (!ressourcedate.dateambauche) {
      dateAmbaucheEror =
        "le champ Date d'ambauche de la ressource est obligatiore";
    }
    if (!ressourcedate.datenaissance) {
      dateNaissanceEror =
        "le champ Date de naissance de la ressource est obligatiore";
    }
    if (!ressourcedate.profilefacturation) {
      profilEror = "le champ Profil de la ressource est obligatiore";
    }
    if (
      !ressourcedate.firstname ||
      !new RegExp(/^\w+$/).test(ressourcedate.firstname)
    ) {
      nomEror = "le champ Nom de la ressource est obligatiore";
    }
    if (
      !ressourcedate.lastname ||
      !new RegExp(/^\w+$/).test(ressourcedate.lastname)
    ) {
      prenomEror = "le champ Prénom de la ressource est obligatiore";
    }

    if (
      matriculeEror ||
      nomEror ||
      statusEror ||
      dateAmbaucheEror ||
      dateNaissanceEror ||
      genreEror ||
      profilEror ||
      prenomEror
    ) {
      setMatriculeEror(matriculeEror);
      setNomEror(nomEror);
      setPrenomEror(prenomEror);
      setDateAmbaucheEror(dateAmbaucheEror);
      setDateNaissanceEror(dateNaissanceEror);
      setStatusEror(statusEror);
      setGenreEror(genreEror);
      setProfilEror(profilEror);

      errorValidacion();
      setDoErr(true);
      return;
    }
    SuccessValidation();
    let ressource = {
      matricule: ressourcedate.matricule,
      status: ressourcedate.status,
      genre: ressourcedate.genre,
      datenaissance: ressourcedate.datenaissance,
      lastname: ressourcedate.nom,
      firstname: ressourcedate.prenom,
      dateambauche: ressourcedate.dateambauche,
      profilefacturation: ressourcedate.profilefacturation,
      techno: forms,
      methodes: formsMethodes,
      outils: formsOutils,
    };
    console.log("ressource", ressource);
    editRessource(ressource);

    history.push("/app/prestations/ressources");
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRessourcedate({ ...ressourcedate, [name]: value });
  };
  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };

  const status = [
    {
      label: "Recrutement",
      value: "recrutement",
    },
    {
      label: "Salarié",
      value: "salarie",
    },
    {
      label: "Contractant",
      value: "contractant",
    },
    {
      label: "inactif",
      value: "inactif",
    },
  ];

  const profiles = [
    {
      label: "Entry",
      value: "entry",
    },
    {
      label: "Intermediate",
      value: "intermediate",
    },
    {
      label: "Specialist",
      value: "specialist",
    },
    {
      label: "Referent",
      value: "referent",
    },
    {
      label: "Expert",
      value: "expert",
    },
    {
      label: "Master",
      value: "master",
    },
  ];
  const technosForm = {
    titre: "",
    niveau: "",
  };
  const methodesForm = {
    titre: "",
    niveau: "",
  };
  const outilsForm = {
    titre: "",
    niveau: "",
  };

  const [forms, setForms] = useState([]);
  const [formsMethodes, setFormsMethodes] = useState([]);
  const [formsOutils, setFormsOutils] = useState([]);

  const handleInputChangeForms = (e, idform) => {
    const { name, value } = e.target;
    setForms(
      forms.map((form, i) => {
        if (i === idform) {
          return {
            ...form,
            [name]: value,
          };
        }
        return form;
      }),
    );
  };

  const addForm = () => {
    setForms([...forms, technosForm]);
  };

  const handleInputChangeMethodes = (e, idform) => {
    const { name, value } = e.target;
    setFormsMethodes(
      formsMethodes.map((form, i) => {
        if (i === idform) {
          return {
            ...form,
            [name]: value,
          };
        }
        return form;
      }),
    );
  };
  const addFormMethodes = () => {
    setFormsMethodes([...formsMethodes, methodesForm]);
  };

  const handleInputChangeOutils = (e, idform) => {
    const { name, value } = e.target;
    setFormsOutils(
      formsOutils.map((form, i) => {
        if (i === idform) {
          return {
            ...form,
            [name]: value,
          };
        }
        return form;
      }),
    );
  };
  const addFormOutils = () => {
    setFormsOutils([...formsOutils, outilsForm]);
  };

  const remove = (i) => {
    console.log(forms);
    setForms(forms.filter((el, id) => id !== i));
  };
  const removeOutil = (i) => {
    setFormsOutils(formsOutils.filter((el, id) => id !== i));
  };
  const removeMethode = (i) => {
    setFormsMethodes(formsMethodes.filter((el, id) => id !== i));
  };
  return (
    <>
      <PageTitle title="Modifer Ressource" path="/app/prestations/ressources" />
      <hr className={classes.hrGlobale}></hr>
      <Grid item xs={12} className={classes.Alert}>
        {error && doErr ? (
          <Alert severity="error">La ressource n'est pas modifié!</Alert>
        ) : null}
      </Grid>
      <form onSubmit={submitEditRessource} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Matricule"
              size="small"
              variant="outlined"
              fullWidth
              name="matricule"
              value={ressourcedate.matricule}
              onChange={(e) => {
                handleInputChange(e);
                setMatriculeEror("");
                setDoErr(false);
              }}
            />
            <div style={{ color: "red" }}>{MatriculeEror}</div>
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Prénom"
              size="small"
              variant="outlined"
              fullWidth
              name="firstname"
              value={ressourcedate.firstname}
              onChange={(e) => {
                handleInputChange(e);
                setNomEror("");
              }}
            />
            <div style={{ color: "red" }}>{NomEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Nom"
              size="small"
              variant="outlined"
              fullWidth
              name="lastname"
              value={ressourcedate.lastname}
              onChange={(e) => {
                handleInputChange(e);
                setPrenomEror("");
              }}
            />
            <div style={{ color: "red" }}>{PrenomEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              select
              label="Genre"
              size="small"
              fullWidth
              name="genre"
              variant="outlined"
              value={ressourcedate.genre}
              onChange={(e) => {
                handleInputChange(e);
                setGenreEror("");
              }}
            >
              <MenuItem key="1" value="homme">
                Homme
              </MenuItem>
              <MenuItem key="2" value="femme">
                Femme
              </MenuItem>
            </TextField>
            <div style={{ color: "red" }}>{GenreEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              select
              label="Status"
              size="small"
              fullWidth
              variant="outlined"
              value={ressourcedate.status}
              onChange={(e) => {
                handleInputChange(e);
                setStatusEror("");
              }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{StatusEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              select
              label="Profil de facturation"
              size="small"
              fullWidth
              name="profilefacturation"
              variant="outlined"
              value={ressourcedate.profilefacturation}
              onChange={(e) => {
                handleInputChange(e);
                setProfilEror("");
              }}
            >
              {profiles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{ProfilEror}</div>
          </Grid>
          <Grid item xs={6}>
            <label>Date d'ambauche</label>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              format="MM/DD/YYYY"
              fullWidth
              type="date"
              name="dateambauche"
              value={ressourcedate.dateambauche}
              onChange={(e) => {
                handleInputChange(e);
                setDateAmbaucheEror("");
              }}
            />
            <div style={{ color: "red" }}>{DateAmbaucheEror}</div>
          </Grid>
          <Grid item xs={6}>
            <label>Date de Naissance</label>
            <TextField
              id="outlined-basic"
              type="date"
              size="small"
              variant="outlined"
              fullWidth
              name="datenaissance"
              value={ressourcedate.datenaissance}
              onChange={(e) => {
                handleInputChange(e);
                setDateNaissanceEror("");
              }}
            />
            <div style={{ color: "red" }}>{DateNaissanceEror}</div>
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="delete" onClick={addForm}>
              <AddIcon />
            </IconButton>
            Ajouter une Technologie
          </Grid>

          {forms.map((form, i) => {
            return (
              <Grid item xs={12}>
                <b className={classes.Btext}> Technologie {i + 1}:</b>
                <br />
                <hr className={classes.hr}></hr>
                <br />
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  label="Technologies"
                  size="small"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={form.name}
                  onChange={(e) => handleInputChangeForms(e, i)}
                />
                <br />
                <TextField
                  className={classes.textField}
                  id="outlined-select-currency"
                  select
                  label="Niveau de maitrise"
                  size="small"
                  fullWidth
                  name="niveau"
                  variant="outlined"
                  value={form.niveau}
                  onChange={(e) => handleInputChangeForms(e, i)}
                >
                  <MenuItem key="0" value="NE">
                    NE - Non Exigé
                  </MenuItem>
                  <MenuItem key="1" value="0">
                    0 - pas de connaissances
                  </MenuItem>
                  <MenuItem key="2" value="1">
                    1 - connaissances théoriques
                  </MenuItem>
                  <MenuItem key="3" value="2">
                    2 - Basique
                  </MenuItem>
                  <MenuItem key="4" value="3">
                    3 - Maitrisé
                  </MenuItem>
                  <MenuItem key="5" value="4">
                    4 - Expert{" "}
                  </MenuItem>
                </TextField>
                <br />
                <IconButton aria-label="delete" onClick={() => remove(i)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            );
          })}

          <Grid item xs={6}>
            <IconButton aria-label="delete" onClick={addFormMethodes}>
              <AddIcon />
            </IconButton>
            Ajouter une Méthode
          </Grid>

          {formsMethodes.map((form, i) => {
            return (
              <>
                <Grid item xs={12}>
                  <b className={classes.Btext}> Méthodes {i + 1}:</b>
                  <br />
                  <hr className={classes.hr}></hr>
                  <br />
                  <TextField
                    className={classes.textField}
                    id="outlined-basic"
                    label="Méthode"
                    size="small"
                    name="name"
                    variant="outlined"
                    fullWidth
                    value={form.name}
                    onChange={(e) => handleInputChangeMethodes(e, i)}
                  />
                  <br />
                  <TextField
                    className={classes.textField}
                    id="outlined-select-currency"
                    select
                    label="Niveau de maitrise"
                    size="small"
                    name="niveau"
                    fullWidth
                    variant="outlined"
                    value={form.niveau}
                    onChange={(e) => handleInputChangeMethodes(e, i)}
                  >
                    <MenuItem key="0" value="NE">
                      NE - Non Exigé
                    </MenuItem>
                    <MenuItem key="1" value="0">
                      0 - pas de connaissances
                    </MenuItem>
                    <MenuItem key="2" value="1">
                      1 - connaissances théoriques
                    </MenuItem>
                    <MenuItem key="3" value="2">
                      2 - Basique
                    </MenuItem>
                    <MenuItem key="4" value="3">
                      3 - Maitrisé
                    </MenuItem>
                    <MenuItem key="5" value="4">
                      4 - Expert{" "}
                    </MenuItem>
                  </TextField>
                  <br />
                  <IconButton
                    aria-label="delete"
                    onClick={() => removeMethode(i)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </>
            );
          })}

          <Grid item xs={6}>
            <IconButton aria-label="delete" onClick={addFormOutils}>
              <AddIcon />
            </IconButton>
            Ajouter un outil
          </Grid>

          {formsOutils.map((form, i) => {
            return (
              <Grid item xs={12}>
                <b className={classes.Btext}> Outil {i + 1}:</b>
                <br />
                <hr className={classes.hr}></hr>
                <br />
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  label="Outil"
                  size="small"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={form.name}
                  onChange={(e) => handleInputChangeOutils(e, i)}
                />
                <br />
                <TextField
                  className={classes.textField}
                  id="outlined-select-currency"
                  select
                  label="Niveau de maitrise"
                  size="small"
                  fullWidth
                  name="niveau"
                  variant="outlined"
                  value={form.niveau}
                  onChange={(e) => handleInputChangeOutils(e, i)}
                >
                  <MenuItem key="0" value="NE">
                    NE - Non Exigé
                  </MenuItem>
                  <MenuItem key="1" value="0">
                    0 - pas de connaissances
                  </MenuItem>
                  <MenuItem key="2" value="1">
                    1 - connaissances théoriques
                  </MenuItem>
                  <MenuItem key="3" value="2">
                    2 - Basique
                  </MenuItem>
                  <MenuItem key="4" value="3">
                    3 - Maitrisé
                  </MenuItem>
                  <MenuItem key="5" value="4">
                    4 - Expert
                  </MenuItem>
                </TextField>
                <br />
                <IconButton aria-label="delete" onClick={() => removeOutil(i)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Button
              size="small"
              type="submit"
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
              onClick={() => {
                annuler();
              }}
            >
              Annuler
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
