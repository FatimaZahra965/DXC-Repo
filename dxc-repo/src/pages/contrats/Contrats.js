import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
import './contrat.css';
export default function Contrats() {
  const classes = useStyles();
  let history = useHistory();
  const [contrats, setContrats] = useState([]);
  useEffect(() => {
    console.log("hello hjjjjj");

    axios
      .get("http://localhost:8080/DXC/contrats/allContrats", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (res) {
        // handle success
        console.log("res", res.data);
        setContrats(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  const bull = <span className={classes.bullet}>•</span>;
  function AjouteContrat() {
    history.push("/app/Contrats/AjouteContrat");
  }
   function EditContrat(id) {
    history.push("/app/Contrats/EditContrat/"+id);
  }
  const AfficheContrat = (e) => {
    let path = `/app/Contrats/ContratDetail/` + e;
    history.push(path);
  };
  return (
    <div>
      <div>
        <PageTitle title="  Liste des contrats"  path="/app/dashboard"/>
      </div>

      <div>
        <div className={classes.Search}>
          <Button variant="contained" className={classes.ButtonSearch}>
            <SearchIcon />
          </Button>
          <Input
            className={classes.InputSearch}
            type="text"
            placeholder="Chercher..."
          />
        </div>    <div className={classes.Bajoute}>
          <Button
            variant="contained"
            className={classes.Button}
            onClick={AjouteContrat}
          >
          
            <AddIcon /> Ajouter contrat
          </Button>
        </div>
    
      </div>
      <br />
     
      <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow className={classes.TableRow}>
              <TableCell>Nom de Contrat</TableCell>
              <TableCell>Nom de Client</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {contrats.map((contrat) => (
              <TableRow key={contrat.nomContrat}>
               
                <TableCell component="th" scope="row">
                  {contrat.nomContrat}
                </TableCell>
                <TableCell component="th" scope="row">
                  {contrat.nomClient}
                </TableCell>
                <TableCell component="th" scope="row">
                  {contrat.description}
                </TableCell>
                <TableRow component="th" scope="row" >
                <Button 
                onClick={() => AfficheContrat(contrat.id)}>
                 <VisibilityIcon className={classes.icons} />
                      </Button>
                  <Button onClick={() => EditContrat(contrat.id)}>
                    <EditIcon className={classes.icons} />
                  </Button>
                </TableRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
}
