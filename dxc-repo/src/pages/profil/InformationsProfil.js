import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
function InformationsProfil(props) {
  const RessourcesToShow = useSelector((state) => state.ressources.ressource);

  return (
    <div>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Informations de profile
        </CardTitle>
        <CardBody className="">
          <Container>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">
                  NOM : {RessourcesToShow.firstname}
                </div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">
                  Prénom : {RessourcesToShow.lastname}
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">
                  Status : {RessourcesToShow.status}
                </div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">
                  Genre : {RessourcesToShow.genre}
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">
                  Profil de facturation : {RessourcesToShow.profilefacturation}
                </div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">
                  Date de naissance : {RessourcesToShow.datenaissance}
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">
                  {" "}
                  Date d'ambauche : {RessourcesToShow.dateambauche}
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}

export default InformationsProfil;
