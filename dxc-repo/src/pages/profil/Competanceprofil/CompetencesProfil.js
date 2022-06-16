import React, { useEffect, useState } from "react";
import CompetenceTech from "./CompetenceTech";
import { Row, Col, Card} from "reactstrap";
import CompetenceLing from "./CompetenceLing";
import CompetenceTrans from "./CompetenceTrans";
import { useDispatch } from "react-redux";
import clienteAxios from "../../../config/axios";
function CompetencesProfil(match) {
  const { matriculeRessource } = match.params;
  const dispatch=useDispatch();
  const getCompetanceAction = (value) => dispatch(getCompetanceAction(value));


  useEffect(() => {
    clienteAxios
      .get(`https://dxcrepo-competance.azurewebsites.net/DXC/competances/Competance/${matriculeRessource}`)
      .then((resp) => {
        console.log("Competence by matriculeRessource",resp.data);
        getCompetanceAction(resp.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [matriculeRessource]);
    return (
      <div>
      <Card>
      <Row>
      <Col lg="4">
        <CompetenceTech   props={getCompetanceAction}/>
      </Col>
      <Col lg="4">
        <CompetenceLing  props={getCompetanceAction}/>
      </Col>
      <Col lg="4">
        <CompetenceTrans props={getCompetanceAction}/>
      </Col>
      </Row>
      
      </Card>
      </div>
    );
}

export default CompetencesProfil;