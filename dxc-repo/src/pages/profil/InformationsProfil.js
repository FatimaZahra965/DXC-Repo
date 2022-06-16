import React from 'react';
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
function InformationsProfil(props) {
    return (
        <div>
    
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        InformationsProfil
        </CardTitle>
        <CardBody className="">
          <Container>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">NOM : ZENNOU</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Prénom : Abdelhadi</div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
    );
}

export default InformationsProfil;