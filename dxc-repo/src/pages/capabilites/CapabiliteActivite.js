import * as React from "react";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { useSelector } from "react-redux";

export default function CapabiliteActivite() {
  const ActivitiesToShow = useSelector(
    (state) => state.prestations.showActivities,
  );
  console.log("showActivities ==================>", ActivitiesToShow);
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Matricule</TableCell>
            <TableCell align="left">Intitulé</TableCell>
            <TableCell align="left">Categorie</TableCell>
            <TableCell align="left">Type d'activité</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ActivitiesToShow.activities.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.nomActivite}</TableCell>
              <TableCell align="left">{row.categorie}</TableCell>
              <TableCell align="left">{row.typeActivite}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
