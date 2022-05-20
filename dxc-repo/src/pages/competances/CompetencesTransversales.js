import React, { useEffect } from "react";
import { Button} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";

function createData(
    Compétence,
    NiveauMaitrise,
    EvaluationManager,
  ) {
    return { Compétence, NiveauMaitrise, EvaluationManager };
  }
  
  const rows = [
    createData(
      "competance 1",
      "4",
      "2",
    ),
    createData(
        "competance 1",
        "4",
        "2",
      ),
      createData(
        "competance 1",
        "4",
        "2",
      ),
  ];
function CompetencesTransversales(props) {
    var classes = useStyles();
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
            {rows.map((row) => (
              <TableRow key={row.matricule}>
                <TableCell component="th" scope="row">
                  {row.Compétence}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.NiveauMaitrise}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.EvaluationManager}
                </TableCell>
                <TableRow component="th" scope="row" >
                  <Button >
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