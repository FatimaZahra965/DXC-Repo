import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton,InputAdornment,TablePagination, TextField,} from "@material-ui/core";
// styles
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { getClientsAction } from "../../services/Actions/clientActions";
import { Alert } from "@material-ui/lab";
export default function Clients() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [val, setVal] = useState("");
  //acceder al state
  const loading = useSelector((state) => state.clients.loading);
  const error = useSelector((state) => state.clients.error);
  const clients = useSelector((state) => state.clients.clients);
  useEffect(() => {
    const loadClients = () => dispatch(getClientsAction());
    loadClients();
  }, []);
  const bull = <span className={classes.bullet}>•</span>;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function AjouteClient() {
    history.push("/app/clients/AjouteClient");
  }
  function EditClient(id) {
    history.push("/app/clients/EditClient/" + id);
  }
  const AfficheClient = (e) => {
    let path = `/app/clients/AffichageClient/` + e;
    history.push(path);
  };
  const RechercheClient = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };

  const filteredData = clients.filter((el) => {
    if (val === "") {
      return el;
    } else {
      return el.nomClient.toLowerCase().includes(val);
    }
  });
  return (
    <>
     {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h3 style={{ color: "black" }}>Connecting...</h3> : null}
      <div>
        <PageTitle title="  Liste des clients" path="/app/dashboard" />
      </div>

      <Grid container spacing={3}>
        <Grid xs={8} className={classes.Search}>
          <TextField
            id="outlined-basic"
            onChange={RechercheClient}
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
            onClick={AjouteClient}
          >
            <AddIcon />
            Ajouter Client
          </Button>
        </Grid>
      </Grid>
      <br />
      <Paper>
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
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((client) => (
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
                      <Button onClick={() => EditClient(client.id)}>
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
          count={clients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
