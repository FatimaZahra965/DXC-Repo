import Input from "./Input";
import React from "react";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Button, } from "@material-ui/core";





function FirstForm({ state, setState}) {


  // const [forms, setForms] = useState([]);
  // const [formsMethodes, setFormsMethodes] = useState([]);
  // const [formsOutils, setFormsOutils] = useState([]);

  function incrementStep() {
    if (state["TypeRessource"] === "interne") {
      setState({ ...state, step: 2 });
    } else if (state["TypeRessource"] === "externe") {
      setState({ ...state, step: 3 });
    }
    console.log(state);
  }

  const classes = useStyles();
  
   const history = useHistory();

  // // const error = useSelector((state) => state.error.error);
  // const [ setDoErr] = useState(false);


  // const options = [
  //   {
  //     label: "Homme",
  //     value: "homme",
  //   },
  //   {
  //     label: "Femme",
  //     value: "femme",
  //   },
  // ];
 

  //  const typeRessource = [
  //   {
  //     label: "Ressource interne",
  //     value: "interne",
  //   },
  //   {
  //     label: "Ressource externe",
  //     value: "externe",
  //   }
  // ];

  const annuler = () => {
    let path = `/app/prestations/ressources`;
    history.push(path);
  };

  // const technosForm = setState;
  // const methodesForm = setState;
  // const outilsForm = setState;

  // const handleInputChange = (e, idform) => {
  //   const { name, value } = e.target;
  //   setForms(
  //     forms.map((form, i) => {
  //       if (i === idform) {
  //         return {
  //           ...form,
  //           [name]: value,
  //         };
  //       }
  //       return form;
  //     }),
  //   );
  // };

  // const addForm = () => {
  //   setForms([...forms, technosForm]);
  // };

  // const handleInputChangeMethodes = (e, idform) => {
  //   const { name, value } = e.target;
  //   setFormsMethodes(
  //     formsMethodes.map((form, i) => {
  //       if (i === idform) {
  //         return {
  //           ...form,
  //           [name]: value,
  //         };
  //       }
  //       return form;
  //     }),
  //   );
  // };
  // const addFormMethodes = () => {
  //   setFormsMethodes([...formsMethodes, methodesForm]);
  // };

  // const handleInputChangeOutils = (e, idform) => {
  //   const { name, value } = e.target;
  //   setFormsOutils(
  //     formsOutils.map((form, i) => {
  //       if (i === idform) {
  //         return {
  //           ...form,
  //           [name]: value,
  //         };
  //       }
  //       return form;
  //     }),
  //   );
  // };
  // const addFormOutils = () => {
  //   setFormsOutils([...formsOutils, outilsForm]);
  // };

  // const remove = (i) => {
  //   console.log(forms);
  //   setForms(forms.filter((el, id) => id !== i));
  // };
  // const removeOutil = (i) => {
  //   setFormsOutils(formsOutils.filter((el, id) => id !== i));
  // };
  // const removeMethode = (i) => {
  //   setFormsMethodes(formsMethodes.filter((el, id) => id !== i));
  // };

  return (
    <>
      
      <hr className={classes.hrGlobale}></hr>

      <form >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Input
              id="outlined-basic"
              name="Prenom"
              label= "Prénom"
              value={state}
              handler={setState}
              required
            />
          </Grid>
           <Grid item xs={6}>
            <Input
              id="outlined-basic"
              name="Nom"
              label="Nom"
              value={state}
              handler={setState}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id="outlined-basic"
              name="Matricule"
              label="Matricule"
              value={state}
              handler={setState}
              required
            />
          </Grid>
          
          <Grid item xs={6}>
            <Input
              id="outlined-select-currency"
              name="TypeRessource"
              label="type Ressource"
              value={state}
              handler={setState}
              required
            >
              {/* {typeRessource.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))} */}
            </Input>
          </Grid>

          <Grid item xs={6}>
            <Input
              id="outlined-select-currency"
              name="Genre"
              label="Genre"
              value={state}
              handler={setState}
              required
            >
              {/* {options.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))} */}
            </Input>
          </Grid>

          <Grid item xs={6}>
            <label>Date de naissance </label>
            <Input
              id="outlined-basic"
              name="DateNaissance"
              type = "date"
              value={state}
              handler={setState}
              required
            />
          </Grid>

          {/* <Grid item xs={6}>
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
                <Input
                  className={classes.textField}
                  id="outlined-basic"
                  label="Technologies"
                  name="titre"
                  value={form.state}
                  handler={(e) => handleInputChange(e, i)}
                />
                <br />
                <Input
                  className={classes.textField}
                  id="outlined-select-currency"
                  select
                  label="Niveau de maitrise"                  
                  name="niveau"
                  value={form.state}
                  handler={(e) =>{
                    handleInputChange(e, i);
                    setState(e, i);}}
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
                </Input>
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
                  <b className={classes.Btext}> Méthode {i + 1} :</b>
                  <br />
                  <hr className={classes.hr}></hr>
                  <br />
                  <Input
                    className={classes.textField}
                    id="outlined-basic"
                    label="Méthode"
                    size="small"
                    name="titre"
                    variant="outlined"
                    fullWidth
                    value={form.name}
                    handler={(e) => {
                      handleInputChangeMethodes(e, i);
                      setState(e, i);
                    }}
                  />
                  <br />
                  <Input
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
                  </Input>
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
                <b className={classes.Btext}> outil {i + 1} :</b>
                <br />
                <hr className={classes.hr}></hr>
                <br />
                <Input
                  className={classes.textField}
                  id="outlined-basic"
                  label="Outil"
                  name="titre"
                  value={form.name}
                  handler={(e) => {
                    handleInputChangeOutils(e, i);
                    setState();
                  }}
                />
                <br />
                <Input
                  className={classes.textField}
                  id="outlined-select-currency"
                  select
                  label="Niveau de maitrise"
                  name="niveau"
                  value={form.niveau}
                  handler={(e) => {
                    handleInputChangeOutils(e, i)
                    setState();
                  }}
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
                </Input>
                <br />
                <IconButton aria-label="delete" onClick={() => removeOutil(i)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            );
          })}  */}
          <Grid item xs={12}>
            <Button
              size="small"
              variant="contained"
              type="button"
              className={classes.btnAjouter}
              color="primary"
              onClick={incrementStep}
            >
              Continuer
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

export default FirstForm;
