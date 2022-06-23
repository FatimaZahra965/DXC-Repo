import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  TablePagination,
  TextField,
} from "@material-ui/core";
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
import { getContratsAction } from "../../services/Actions/contratActions";
import { Alert } from "@material-ui/lab";
// import './contrat.css';
export default function Contrats() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [val, setVal] = useState("");
  //acceder al state
  const loading = useSelector((state) => state.contrats.loading);
  const error = useSelector((state) => state.contrats.error);
  const contrats = useSelector((state) => state.contrats.contrats);
  useEffect(() => {
    const loadContrats = () => dispatch(getContratsAction());
    loadContrats();
  }, []);
  const bull = <span className={classes.bullet}>•</span>;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function AjouteContrat() {
    history.push("/app/Contrats/AjouteContrat");
  }
  function EditContrat(id) {
    history.push("/app/Contrats/EditContrat/" + id);
  }
  const AfficheContrat = (e) => {
    let path = `/app/Contrats/ContratDetail/` + e;
    history.push(path);
  };
  const RechercheContrat = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };
  const filteredData = contrats.filter((el) => {
    if (val === "") {
      return el;
    } else {
      return el.nomContrat.toLowerCase().includes(val);
    }
  });

  return (
    <div>
       {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h3 style={{ color: "black" }}>Connecting...</h3> : null}
      <div>
        <PageTitle title="  Liste des contrats" path="/app/dashboard" />
      </div>

      <Grid container spacing={3}>
        <Grid xs={8} className={classes.Search}>
          <TextField
            id="outlined-basic"
            onChange={RechercheContrat}
            variant="outlined"
            fullWidth
            size="small"
            label="Recherche"
            className={classes.searchTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton className={classes.addBtn}>
                    <SearchIcon className={classes.addBtn} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4} className={classes.Bajoute}>
          <Button
            type="small"
            variant="contained"
            color="primary"
            className={classes.Button}
            onClick={AjouteContrat}
          >
            <AddIcon />
            Ajouter Contrat
          </Button>
        </Grid>
      </Grid>
      <br />

      <Paper>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.TableRow}>
                <TableCell>Nom de Contrat</TableCell>
                <TableCell>Nom de Client</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((contrat) => (
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
                    <TableRow component="th" scope="row">
                      <Button onClick={() => AfficheContrat(contrat.id)}>
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
        <TablePagination
          rowsPerPageOptions={[8, 10, 25, 100]}
          component="div"
          count={contrats.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
