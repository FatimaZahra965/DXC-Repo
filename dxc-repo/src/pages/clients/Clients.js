import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import EditIcon from "@material-ui/icons/Edit";
// styles
import useStyles from "./styles";
import "./style.css";
export default function Clients() {
  const classes = useStyles();
  let history = useHistory();
  const [clients, setClients] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");
    axios
      .get("http://localhost:8080/DXC/clients/allClients", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (res) {
        // handle success
        console.log("res", res.data);
        setClients(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  const bull = <span className={classes.bullet}>•</span>;
  function AjouteClient() {
    history.push("/app/clients/AjouteClient");
  }

  const AfficheClient = (e) => {
    let path = `/app/clients/AffichageClient` + e;
    history.push(path);
  };

  return (
    <>
      <div>
        <PageTitle title="Liste des Clients" path="/app/dashboard" />
      </div>
      <div>
        <div className={classes.Search}>
          <Button variant="contained" className={classes.ButtonSearch}>
            <SearchIcon />
          </Button>
          <Input
            className={classes.InputSearch}
            type="text"
            placeholder="Chercher un client par nom "
          />
        </div>
        <div className={classes.Bajoute}>
          <Button
            variant="contained"
            className={classes.Button}
            onClick={AjouteClient}
          >
            <AddIcon /> Ajouter Client
          </Button>
        </div>
      </div>
      <br />
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.TableRow}>
                <TableCell>Nom de Client</TableCell>
                <TableCell>Market</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.nomClient}>
                  <TableCell component="th" scope="row">
                    {client.nomClient}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {client.market}
                  </TableCell>
                  <TableRow component="th" scope="row">
                    <Button onClick={() => AfficheClient(client.id)}>
                      <VisibilityIcon className={classes.icons} />
                    </Button>
                  </TableRow>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
