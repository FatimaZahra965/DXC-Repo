import React from "react";
import { Row, Col, Card} from "reactstrap";
import Technologies from "./Technologies";
import clienteAxios from "../../../config/axios";
import { getCompetanceRessourceAction } from "../../../services/Actions/competanceActions";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Outils from "./Outils";
import Methodes from "./Methodes";
function TechnoMethodes() {

  const RessourcesToShow = useSelector(
    (state) => state.ressources.ressource,
  );
  const dispatch=useDispatch();
  const CompetanceRessourceAction = (value) => dispatch(getCompetanceRessourceAction(value));

  const competances = useSelector(
    (state) => state.competances.competance,
  );

  useEffect(() => {
    CompetanceRessourceAction(RessourcesToShow.matricule)
});

    return (
        <div>
      <Card>
      <Row>
      <Col lg="4">
        <Technologies />
      </Col>
      <Col lg="4">
        <Outils />
      </Col>
      <Col lg="4">
        <Methodes />
      </Col>
      </Row>    
      </Card>
      </div>
    );
}

export default TechnoMethodes;