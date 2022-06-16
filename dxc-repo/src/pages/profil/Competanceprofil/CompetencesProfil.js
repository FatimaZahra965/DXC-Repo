import React, { useEffect, useState } from "react";
import CompetenceTech from "./CompetenceTech";
import { Row, Col, Card} from "reactstrap";
import CompetenceLing from "./CompetenceLing";
import CompetenceTrans from "./CompetenceTrans";
function CompetencesProfil(props) {

    return (
      <div>
      <Card>
      <Row>
      <Col lg="4">
        <CompetenceTech/>
      </Col>
      <Col lg="4">
        <CompetenceLing/>
      </Col>
      <Col lg="4">
        <CompetenceTrans/>
      </Col>
      </Row>
      
      </Card>
      </div>
    );
}

export default CompetencesProfil;