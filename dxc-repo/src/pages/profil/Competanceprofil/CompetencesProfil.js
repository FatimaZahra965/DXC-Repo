import React, { useEffect, useState } from "react";
import CompetenceTech from "./CompetenceTech";
import { Row, Col, Card} from "reactstrap";
import CompetenceLing from "./CompetenceLing";
import CompetenceTrans from "./CompetenceTrans";
import { useDispatch } from "react-redux";
import { getCompetanceRessourceAction } from '../../../services/Actions/competanceActions';
import clienteAxios from "../../../config/axios";
function CompetencesProfil(match) {
  const { matriculeRessource } = match.params;
  const dispatch=useDispatch();
  const getCompetanceRessourceAction = (value) => dispatch(getCompetanceRessourceAction(value));


  useEffect(() => {
    clienteAxios
      .get(`https://dxcrepo-competance.azurewebsites.net/DXC/competances/CompetanceRessource/${matriculeRessource}`)
      .then((resp) => {
        console.log("Competence by matriculeRessource",resp.data);
        getCompetanceRessourceAction(resp.data)
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
        <CompetenceTech   props={getCompetanceRessourceAction}/>
      </Col>
      <Col lg="4">
        <CompetenceLing  props={getCompetanceRessourceAction}/>
      </Col>
      <Col lg="4">
        <CompetenceTrans props={getCompetanceRessourceAction}/>
      </Col>
      </Row>
      
      </Card>
      </div>
    );
}

export default CompetencesProfil;