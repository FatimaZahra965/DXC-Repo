import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Tabs from "./Tabs";
import './Competances.css';

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import CompetencesTransversales from "./CompetencesTransversales.js";
import CompetencesTechniques from "./CompetencesTechniques.js";
import CompetencesLinguistiques from "./CompetencesLinguistiques.js";

export default function Competances() {
  const classes = useStyles();
  let history = useHistory();
  function AjouteCompetance() {
    let path = `/app/competances/ajouteCompetance`;
    history.push(path);
  }
  return (
    <>
      <PageTitle title="Competances"  path="/app/dashboard"/>
      <br/>
      <div className={classes.Bajoute}>
          <Button
            variant="contained"
            className={classes.Button}
            onClick={AjouteCompetance}
          >
          
            <AddIcon /> Ajouter Competance
          </Button>
        </div>

        <Tabs >
        <div title="Competences Techniques ">
       <CompetencesTechniques/>
        </div>
        <div title="Competences Transversales">
        <CompetencesTransversales/>
        </div>
        <div title="Competences Linguistiques">
        <CompetencesLinguistiques/>
        </div>
      </Tabs>
     
     
    </>
  );
}
