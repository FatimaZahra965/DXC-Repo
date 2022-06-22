import React from "react";
import { Card } from "@material-ui/core";
import { CardBody, CardTitle, Table } from "reactstrap";
import { useSelector } from "react-redux";
function Technologies() {

  const competances = useSelector(
    (state) => state.competances.competancesRess,
  );
    return (
        <div>
        <Card>
            <CardBody>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">les Compétences </CardTitle>
              <div className="d-flex align-items-center p-2">
              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Compétence</th>
                    <th>Niveau</th>
                  </tr>
                </thead>
                <tbody>
                  {competances.map((competence) => (
                    <tr key={competence.nomCompetance} className="border-top">
                      
                      <td>{competence.nomCompetance}</td>
                      <td>{competence.niveau}</td>
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