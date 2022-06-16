import React from "react";
import { Card } from "@material-ui/core";
import { CardBody, CardTitle, Table } from "reactstrap";
import { useSelector } from "react-redux";
function Outils(props) {
  const RessourcesToShow = useSelector(
    (state) => state.ressources.ressource,
  );
    return (
      <div>
      <Card>
          <CardBody>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">Outils</CardTitle>
            <div className="d-flex align-items-center p-2">
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Nom de Outil</th>
                  <th>Niveau</th>
                </tr>
              </thead>
              <tbody>
                {RessourcesToShow.outils.map((outil) => (
                  <tr key={outil.id} className="border-top">
                    
                    <td>{outil.titre}</td>
                    <td>{outil.niveau}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
          </CardBody>
        </Card>
        </div>
    );
}

export default Outils
;