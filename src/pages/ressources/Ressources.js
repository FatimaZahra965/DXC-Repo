import React, { useEffect } from "react";

// styles
// import useStyles from "./styles";
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getRessourcesAction } from "../../services/Actions/ressourcesActions";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "18px",
  },
  addBtn: {
    display: "flex",
    marginTop: "16px",
    marginBottom: "8px",
    justifyContent: "space-between",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
  },
});

function createData(
  matricule,
  status,
  prenom,
  nom,
  genre,
  dateNaissance,
  dateAmbauche,
) {
  return { matricule, status, prenom, nom, genre, dateNaissance, dateAmbauche };
}

const rows = [
  createData(
    15,
    "Status",
    "khalid",
    "Zennou",
    "Homme",
    "24-02-1996",
    "24-02-2020",
  ),
  createData(
    25,
    "Status",
    "khalid",
    "Zennou",
    "Homme",
    "04-05-1996",
    "24-02-2020",
  ),
  createData(
    44,
    "Status",
    "khalid",
    "Zennou",
    "Homme",
    "20-06-1996",
    "24-02-2020",
  ),
  createData(
    251,
    "Status",
    "khalid",
    "Zennou",
    "Homme",
    "24-11-1996",
    "24-02-2020",
  ),
  createData(
    325,
    "Status",
    "khalid",
    "Zennou",
    "Homme",
    "24-12-1996",
    "24-02-2022",
  ),
];

export default function Ressources() {
  // var classes = useStyles();
  // local
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const ressources = useSelector((state) => state.ressources.ressources);

  useEffect(() => {
    const loadRessources = () => dispatch(getRessourcesAction());
    loadRessources();
  }, []);

  const addRessource = () => {
    let path = `/app/ressources/AjouterRessource`;
    history.push(path);
  };

  const EditRessource = (e) => {
    let path = `/app/ressources/ModiferRessource/` + e;
    history.push(path);
  };
  const ViewRessource = (e) => {
    let path = `/app/ressources/AfficherRessource/` + e;
    history.push(path);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PageTitle title="Ressources" />
        </Grid>
        <Grid item xs={6}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={addRessource}
          >
            <AddIcon />
            Ajouter Ressource
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        {ressources.map((ressource) => {
          <h1>{ressource.type}</h1>;
        })}
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Matricule</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Date de naissance</TableCell>
              <TableCell>Date d'aumbauche</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.matricule}>
                <TableCell component="th" scope="row">
                  <AccountCircleIcon />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.matricule}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.status}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.prenom}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nom}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.genre}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.dateNaissance}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.dateAmbauche}
                </TableCell>
                <TableRow component="th" scope="row">
                  <Button onClick={() => ViewRessource(row.matricule)}>
                    <VisibilityIcon className={classes.icons} />
                  </Button>
                  <Button onClick={() => EditRessource(row.matricule)}>
                    <EditIcon className={classes.icons} />
                  </Button>
                </TableRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
