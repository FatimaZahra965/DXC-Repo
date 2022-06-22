import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivitesAction } from "../../services/Actions/activitesActions";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import { Alert } from "@material-ui/lab";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { Axios } from "axios";

const columns = [
  { id: "nomActivite", label: "Intitulé de l'activité", minWidth: 100 },
  { id: "typeActivite", label: "Type", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "dateDebut", label: "Date de dédut", minWidth: 100 },
  { id: "dateFin", label: "Date de fin", minWidth: 100 },
  { id: "categorie", label: "Categorie", minWidth: 100 },
];

const Activites = () => {
  const history = useHistory();
  var classes = useStyles();
  const addActivite = () => {
    let path = `/app/activites/AjouteAactivite`;
    history.push(path);
  };
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.activites.loading);
  const error = useSelector((state) => state.activites.error);
  const activites = useSelector((state) => state.activites.activites);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [val, setVal] = useState("");
  const [listFilter, setListFilter] = useState([]);
  // const [activites, setActivites] = useState([]);
  useEffect(() => {
    const loadActivites = () => dispatch(getActivitesAction());
    loadActivites();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const EditActivite = (e) => {
    let path = `/app/activites/ModifierAactivite/` + e;
    history.push(path);
  };
  const ViewActivite = (e) => {
    let path = `/app/activites/AfficherActivite/` + e;
    history.push(path);
  };

  const Recherche = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };

  const filteredData = activites.filter((el) => {
    if (val === "") {
      return el;
    } else {
      return el.nomActivite.toLowerCase().includes(val);
    }
  });

  return (
    <>
      {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h3>Connecting...</h3> : null}
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.grid}>
          <PageTitle title="Activités" path="/app/dashboard" />
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
            onClick={addActivite}
          >
            <AddIcon />
            Ajouter Activité
          </Button>
        </Grid>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  {/* <TableCell key="prestation" style={{ minWidth: "170" }}>
                    Prestation
                  </TableCell> */}
                  <TableCell key="actions" style={{ minWidth: "170" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.etat}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      {/* <TableCell key="1" align="1">
                        {row.idPrestation}
                       
                      </TableCell> */}

                      <TableCell>
                        <Button
                          onClick={() => {
                            ViewActivite(row.id);
                          }}
                        >
                          <VisibilityIcon className={classes.icons} />
                        </Button>
                        <Button
                          onClick={() => {
                            EditActivite(row.id);
                          }}
                        >
                          <EditIcon className={classes.icons} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 10, 25, 100]}
            component="div"
            count={activites.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </>
  );
};

export default Activites;
