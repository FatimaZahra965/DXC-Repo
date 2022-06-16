import React from "react";
import { Card } from "@material-ui/core";
import { CardBody, CardTitle, Table } from "reactstrap";
import { useSelector } from "react-redux";
function Technologies(props) {
    const RessourcesToShow = useSelector(
      (state) => state.ressources.ressource,
    );
 
    return (
        <div>
        <Card>
            <CardBody>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">Technologies</CardTitle>
              <div className="d-flex align-items-center p-2">
              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Nom de technologie</th>
                    <th>Niveau</th>
                  </tr>
                </thead>
                <tbody>
                  {RessourcesToShow.technologies.map((techno) => (
                    <tr key={techno.id} className="border-top">
                      
                      <td>{techno.titre}</td>
                      <td>{techno.niveau}</td>
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

export default Technologies
;