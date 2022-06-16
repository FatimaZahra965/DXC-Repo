import React from "react";
import { Row, Col, Card} from "reactstrap";
import Technologies from "./Technologies";
import Outils from "./Outils";
import Methodes from "./Methodes";
function TechnoMethodes(props) {

    return (
        <div>
      <Card>
      <Row>
      <Col lg="4">
        <Technologies/>
      </Col>
      <Col lg="4">
        <Outils/>
      </Col>
      <Col lg="4">
        <Methodes/>
      </Col>
      </Row>    
      </Card>
      </div>
    );
}

export default TechnoMethodes;