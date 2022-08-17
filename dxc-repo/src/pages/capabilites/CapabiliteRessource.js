import * as React from "react";
import Table from "@material-ui/core/Table";
import {
  Box,
  Button,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useStyles from "./styles.js";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { showActivities } from "../../services/Actions/prestationsActions.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useDispatch } from "react-redux";

export default function CapabiliteRessource() {
  const classes = useStyles();
  const RessourcesToShow = useSelector(
    (state) => state.prestations.showRessources,
  );
  const ActivitiesToShow = useSelector(
    (state) => state.prestations.showActivities,
  );
  const dispatch = useDispatch();
  const showActivitieS = (value) => dispatch(showActivities(value));
  const [ressources, setRessources] = useState([]);
  const [ressourcesAct, setRessourcesAct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://localhost:9000/DXC/ressource/capabilite/` +
          RessourcesToShow.idCapabilite,
      )
      .then(function (res) {
        // handle success
        console.log("res ressources by capabilités =======>", res.data);
        setRessources(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const showRessourcesAct = () => {
    ressources.forEach((element) => {
      console.log("element.id", element);
      getActivite(element.matricule);
    });
    const data = {
      activities: [],
      showAct: ActivitiesToShow.showAct ? false : true,
    };
    data.activities = ressourcesAct;
    showActivitieS(data);
  };

  const getActivite = (id) => {
    axios
      .get(
        `http://localhost:9006/dxc/activites/activite/ressource/` +
          id,
      )
      .then(function (res) {
        // handle success
        console.log("res activite by ressources =======>", res.data);
        setRessourcesAct(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <TableContainer>
      <Grid style={{ margin: "1px" }}>
        <Button
          onClick={() => {
            showRessourcesAct();
          }}
          className={classes.showRessource}
        >
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </Button>
      </Grid>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Matricule</TableCell>
            <TableCell align="left">Nom</TableCell>
            <TableCell align="left">Prénom</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Genre</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ressources.map((row) => (
            <TableRow
              key={row.matricule}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" scope="row">
                {row.matricule}
              </TableCell>
              <TableCell align="left" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.genre}</TableCell>
              <TableCell align="left">
                <Box mr={1}>
                  <Button variant="text" color="error">
                    <VisibilityIcon className={classes.icons} />
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
