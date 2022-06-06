import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import axios from "axios";

function CompetencesTransversales(props) {
    var classes = useStyles();
    let history = useHistory();
    const [competences, setCompetences] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");

    axios
      .get("https://dxcrepo-competance.azurewebsites.net/DXC/competances/Competance/type/Competences transversales", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
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
    history.push("/app/competances/EditCompetance/"+id);
  }
  const AfficheCompetence = (e) => {
    let path = `/app/competances/CompetanceDetail/` + e;
    history.push(path);
  };
    return (
        <div>
          <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Compétence</TableCell>
              <TableCell>Niveau de maitrise attendu</TableCell>
              <TableCell>Evaluation de manager</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {competences.map((competence) => (
              <TableRow key={competence.nomCompetance}>
               
                <TableCell component="th" scope="row">
                  {competence.nomCompetance}
                </TableCell>
                <TableCell component="th" scope="row">
                  {competence.niveau}
                </TableCell>
                <TableCell component="th" scope="row">
                  {competence.evaluationManager}
                </TableCell>
                <TableRow component="th" scope="row" >
                <Button 
                onClick={() => AfficheCompetence(competence.id)}>
                 <VisibilityIcon className={classes.icons} />
                      </Button>
                  <Button onClick={() => EditCompetence(competence.id)}>
                    <EditIcon className={classes.icons} />
                  </Button>
                </TableRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
        </div>
    );
}

export default CompetencesTransversales;