import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {
  Grid,
  IconButton,
  InputAdornment,
  // IconButton,
  // InputAdornment,
  TablePagination,
  TextField,
} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input";
import VisibilityIcon from "@material-ui/icons/Visibility";
// import SearchIcon from "@material-ui/icons/Search";
// import Typography from "@material-ui/core/Typography";
import PageTitle from "../../components/PageTitle/PageTitle";
// import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
// import { getCapabilitesAction } from "../../services/Actions/capabiliteActions";
import clienteAxios from "../../config/axios";
import SearchIcon from "@material-ui/icons/Search";
import { Alert } from "reactstrap";
import { useSelector } from "react-redux";

// import './contrat.css';
export default function Capabilites() {
  const classes = useStyles();
  let history = useHistory();
  // const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [val, setVal] = useState("");
  const [capabilites, setCapabilites] = useState([]);

  //acceder al state

  useEffect(() => {
    // const loadCapabilites = () => dispatch(getCapabilitesAction());
    // loadCapabilites();
    clienteAxios
      .get(
        "https://localhost:9008/DXC/capabilites/allCapabilites",
      )
      .then((resp) => {
        // console.log("===================>", resp);
        setCapabilites(resp.data);
      })
      .catch((error) => {
        console.log("=======>", error);
      });
  });

  //const loading = useSelector((state) => state.capabilites.loading);
  //const error = useSelector((state) => state.capabilites.error);
  // const capabilites = useSelector((state) => state.capabilites.capabilites);
  const bull = <span className={classes.bullet}>•</span>;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function AjouteCapabilite() {
    history.push("/app/AjouteCapabilite");
  }
  function EditCapabilite(id) {
    history.push("/app/EditCapabilite/" + id);
  }
  const AfficheCapabilite = (e) => {
    let path = `/app/CapabiliteDetail/` + e;
    history.push(path);
  };
  const Recherche = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };

  const filteredData = capabilites.filter((el) => {
    if (val === "") {
      return el;
    } else {
      return el.firstname.toLowerCase().includes(val);
    }
  });

  return (
    <>
      {/* {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h1>Connexion...</h1> : null} */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PageTitle title="Capabilities" path="/app/dashboard" />
        </Grid>
        <Grid item xs={6} className={classes.grid}></Grid>
        <Grid xs={6} className={classes.grid}>
          <TextField
            id="outlined-basic"
            onChange={Recherche}
            variant="outlined"
            fullWidth
            size="small"
            label="Rechercher"
            className={classes.searchTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            type="small"
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={AjouteCapabilite}
          >
            <AddIcon></AddIcon>
            Ajouter Capabilité
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow className={classes.TableRow}>
                    <TableCell>Matricule du Capabilité</TableCell>
                    <TableCell>Intitulé</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((capabilite) => (
                      <TableRow key={capabilite.matricule}>
                        <TableCell component="th" scope="row">
                          {capabilite.matricule}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {capabilite.intitule}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {capabilite.description}
                        </TableCell>
                        <TableRow component="th" scope="row">
                          <Button
                            onClick={() => AfficheCapabilite(capabilite.id)}
                          >
                            <VisibilityIcon className={classes.icons} />
                          </Button>
                          <Button onClick={() => EditCapabilite(capabilite.id)}>
                            <EditIcon className={classes.icons} />
                          </Button>
                        </TableRow>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[8, 10, 25, 100]}
              component="div"
              count={capabilites.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
