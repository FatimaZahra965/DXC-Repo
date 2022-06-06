import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Box, Button, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewRessourceAction } from "../../services/Actions/ressourcesActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

export default function AjouterRessource() {
  const classes = useStyles();
  const history = useHistory();
  //state
  const [Matricule, setMatricule] = useState("");
  const [Status, setStatus] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Nom, setNom] = useState("");
  const [Genre, setGenre] = useState("");
  const [DateAmbauche, setDateAmbauche] = useState("");
  const [DateNaissance, setDateNaissance] = useState("");
  const [Profil, setProfil] = useState("");

  const [MatriculeEror, setMatriculeEror] = useState("");
  const [StatusEror, setStatusEror] = useState("");
  const [PrenomEror, setPrenomEror] = useState("");
  const [NomEror, setNomEror] = useState("");
  const [GenreEror, setGenreEror] = useState("");
  const [DateAmbaucheEror, setDateAmbaucheEror] = useState("");
  const [DateNaissanceEror, setDateNaissanceEror] = useState("");
  const [ProfilEror, setProfilEror] = useState("");

  const [FormsEror, setFormsEror] = useState("");
  const [FormsMethodesEror, setFormsMethodesEror] = useState("");
  const [FormsOutilsEror, setFormsOutilsEror] = useState("");

  const [forms, setForms] = useState([]);
  const [formsMethodes, setFormsMethodes] = useState([]);
  const [formsOutils, setFormsOutils] = useState([]);

  const dispatch = useDispatch();
  const addRessource = (ressource) =>
    dispatch(createNewRessourceAction(ressource));
  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());

  const error = useSelector((state) => state.error.error);
  const submitNewRessource = (e) => {
    e.preventDefault();
    let matriculeEror = "";
    let statusEror = "";
    let genreEror = "";
    let nomEror = "";
    let prenomEror = "";
    let profilEror = "";
    let dateNaissanceEror = "";
    let dateAmbaucheEror = "";
    let formsEror = "";
    let formsMethodesEror = "";
    let formsOutilsEror = "";

    if (!Matricule) {
      matriculeEror = "le champ Matricule de la ressource est obligatiore";
    }
    if (!Status) {
      statusEror = "le champ Status de la ressource est obligatiore";
    }
    if (!Genre) {
      genreEror = "le champ Genre de la ressource est obligatiore";
    }
    if (!DateAmbauche) {
      dateAmbaucheEror =
        "le champ Date d'ambauche de la ressource est obligatiore";
    }
    if (!DateNaissance) {
      dateNaissanceEror =
        "le champ Date de naissance de la ressource est obligatiore";
    }
    if (!Profil) {
      profilEror = "le champ Profil de la ressource est obligatiore";
    }
    if (!Nom) {
      nomEror = "le champ Nom de la ressource est obligatiore";
    }
    if (!Prenom) {
      prenomEror = "le champ Prénom de la ressource est obligatiore";
    }
    if (!forms) {
      formsEror = "le champ Technologie de la ressource est obligatiore";
    }
    if (!formsMethodes) {
      formsMethodesEror = "le champ Méthode de la ressource est obligatiore";
    }
    if (!formsOutils) {
      formsOutilsEror = "le champ Outils de la ressource est obligatiore";
    }

    if (
      matriculeEror ||
      nomEror ||
      statusEror ||
      dateAmbaucheEror ||
      dateNaissanceEror ||
      genreEror ||
      profilEror ||
      prenomEror ||
      formsEror ||
      formsMethodesEror ||
      formsOutilsEror
    ) {
      setMatriculeEror(matriculeEror);
      setNomEror(nomEror);
      setPrenomEror(prenomEror);
      setDateAmbaucheEror(dateAmbaucheEror);
      setDateNaissanceEror(dateNaissanceEror);
      setStatusEror(statusEror);
      setGenreEror(genreEror);
      setProfilEror(profilEror);
      setFormsEror(formsEror);
      setFormsMethodesEror(formsMethodesEror);
      setFormsOutilsEror(formsOutilsEror);

      errorValidacion();
      return;
    }
    SuccessValidation();
    let ressource = {
      matricule: Matricule,
      status: Status,
      genre: Genre,
      dateNaissance: DateNaissance,
      lastName: Nom,
      firstName: Prenom,
      dateAmbauche: DateAmbauche,
      technologies: forms,
      methodes: formsMethodes,
      outils: formsOutils,
    };
    console.log("ressource", ressource);
    addRessource(ressource);

    history.push("/app/prestations/ressources");
  };

  const options = [
    {
      label: "Homme",
      value: "homme",
    },
    {
      label: "Femme",
      value: "femme",
    },
  ];

  const status = [
    {
      label: "recrutement",
      value: "recrutement",
    },
    {
      label: "Salarié",
      value: "Salarié",
    },
    {
      label: "Contractant",
      value: "Contractant",
    },
    {
      label: "inactif",
      value: "inactif",
    },
  ];

  const profiles = [
    {
      label: "Entry",
      value: "Entry",
    },
    {
      label: "Intermediate",
      value: "Intermediate",
    },
    {
      label: "Specialist",
      value: "Specialist",
    },
    {
      label: "Referent",
      value: "Referent",
    },
    {
      label: "Expert",
      value: "Expert",
    },
    {
      label: "Master",
      value: "Master",
    },
  ];

  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };
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

  const handleInputChange = (e, idform) => {
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
      <PageTitle title="Ajouter Ressource" path="/app/prestations/ressources" />
      <hr className={classes.hrGlobale}></hr>
      <Grid item xs={12} className={classes.Alert}>
        {error ? (
          <Alert severity="error">La ressource n'est pas ajouté!</Alert>
        ) : null}
      </Grid>

      <form onSubmit={submitNewRessource}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Prénom"
              size="small"
              variant="outlined"
              fullWidth
              valur={Prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
                setPrenomEror("");
              }}
            />
            <div style={{ color: "red" }}>{PrenomEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Nom"
              size="small"
              variant="outlined"
              fullWidth
              valur={Nom}
              onChange={(e) => {
                setNom(e.target.value);
                setNomEror("");
              }}
            />
            <div style={{ color: "red" }}>{NomEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Matricule"
              size="small"
              variant="outlined"
              fullWidth
              valur={Matricule}
              onChange={(e) => {
                setMatricule(e.target.value);
                setMatriculeEror("");
              }}
            />
            <div style={{ color: "red" }}>{MatriculeEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              select
              label="Status"
              size="small"
              fullWidth
              variant="outlined"
              valur={Status}
              onChange={(e) => {
                setStatus(e.target.value);
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
              id="outlined-select-currency"
              select
              label="Genre"
              size="small"
              fullWidth
              variant="outlined"
              valur={Genre}
              onChange={(e) => {
                setGenre(e.target.value);
                setGenreEror("");
              }}
            >
              {options.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
            <div style={{ color: "red" }}>{GenreEror}</div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              select
              label="Profil de facturation"
              size="small"
              fullWidth
              variant="outlined"
              valur={Profil}
              onChange={(e) => {
                setProfil(e.target.value);
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
              fullWidth
              type="date"
              valur={DateAmbauche}
              onChange={(e) => {
                setDateAmbauche(e.target.value);
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
              valur={DateNaissance}
              onChange={(e) => {
                setDateNaissance(e.target.value);
                setDateAmbaucheEror("");
              }}
            />
            <div style={{ color: "red" }}>{DateNaissanceEror}</div>
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="delete" onClick={addForm}>
              <AddIcon />
            </IconButton>
            Ajouter une Technologie
            <div style={{ color: "red" }}>{FormsEror}</div>
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
                  onChange={(e) => {
                    handleInputChange(e, i);
                    setFormsEror("");
                  }}
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
                  onChange={(e) => handleInputChange(e, i)}
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
            <div style={{ color: "red" }}>{FormsMethodesEror}</div>
          </Grid>

          {formsMethodes.map((form, i) => {
            return (
              <>
                <Grid item xs={12}>
                  <b className={classes.Btext}> Méthode {i + 1} :</b>
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
                    onChange={(e) => {
                      handleInputChangeMethodes(e, i);
                      setFormsMethodesEror("");
                    }}
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
            <div style={{ color: "red" }}>{FormsOutilsEror}</div>
          </Grid>

          {formsOutils.map((form, i) => {
            return (
              <Grid item xs={12}>
                <b className={classes.Btext}> outil {i + 1} :</b>
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
                  onChange={(e) => {
                    handleInputChangeOutils(e, i);
                    setFormsOutilsEror("");
                  }}
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
              variant="contained"
              type="submit"
              className={classes.btnAjouter}
              color="primary"
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
          </Grid>
        </Grid>
      </form>
    </>
  );
}
