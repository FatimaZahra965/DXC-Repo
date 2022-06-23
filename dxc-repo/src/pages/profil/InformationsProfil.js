import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import clienteAxios from '../../config/axios';
function InformationsProfil(props) {
  
  const RessourcesToShow = useSelector(
    (state) => state.ressources.ressource,
  );
 
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
                <div className="bg-light p-2 border">NOM : {RessourcesToShow.firstName}</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Prénom : {RessourcesToShow.lastName}</div>
              </Col>
              
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">Status : {RessourcesToShow.status}</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Genre : {RessourcesToShow.genre}</div>
              </Col>
              
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border">Profil de facturation : {RessourcesToShow.status}</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Date de naissance : {RessourcesToShow.dateNaissance}</div>
              </Col>
              
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="bg-light p-2 border"> Date d'ambauche : {RessourcesToShow.dateAmbauche}</div>
              </Col>
              
            </Row>
            
           
          </Container>
        </CardBody>
      </Card>
    </div>
    );
}

export default InformationsProfil;