import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { CardBody, CardTitle, Table } from "reactstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Outils(props) {
  let history = useHistory();
  const [competences, setCompetences] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");

    axios
      .get(
        "https://dxcrepo-competance.azurewebsites.net/DXC/competances/Competance/type/techniques",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      )
      .then(function (res) {
        // handle success
        console.log("res", res.data);
        setCompetences(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  function EditCompetence(id) {
    history.push("/app/competances/EditCompetance/" + id);
  }
  const AfficheCompetence = (e) => {
    let path = `/app/competances/CompetanceDetail/` + e;
    history.push(path);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Compétences Transversales</CardTitle>
          <div className="d-flex align-items-center p-2">
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Competance</th>
                  <th>Niveau</th>
                </tr>
              </thead>
              <tbody>
                {competences.map((competence) => (
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

export default Outils;
