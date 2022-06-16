import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPrestationsAction } from "../../services/Actions/prestationsActions";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
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

import QueueIcon from "@material-ui/icons/Queue";

const columns = [
  { id: "titre", label: "Titre", minWidth: 100 },
  { id: "etat", label: "Etat", minWidth: 100 },
  { id: "market", label: "Market", minWidth: 100 },
  { id: "type", label: "Type", minWidth: 100 },
  { id: "dateDebut", label: "Date de Début", minWidth: 180 },
  { id: "dateFin", label: "Date de Fin", minWidth: 180 },
];

const Prestations = () => {
  const history = useHistory();
  var classes = useStyles();
  const addPrestation = () => {
    let path = `/app/prestations/AjouterPrestation`;
    history.push(path);
  };
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [val, setVal] = useState("");
  const [listFilter, setListFilter] = useState([]);

  useEffect(() => {
    const loadProducts = () => dispatch(getPrestationsAction());
    loadProducts();
  }, []);

  //acceder al state
  const loading = useSelector((state) => state.prestations.loading);
  const error = useSelector((state) => state.prestations.error);
  const prestations = useSelector((state) => state.prestations.prestations);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const EditPrestation = (e) => {
    let path = `/app/prestations/ModiferPrestation/` + e;
    history.push(path);
  };
  const ViewPrestation = (e) => {
    let path = `/app/prestations/AficherPrestation/` + e;
    history.push(path);
  };

  const Recherche = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };

  const filteredData = prestations.filter((el) => {
    if (val === "") {
      return el;
    } else {
      return el.titre.toLowerCase().includes(val);
    }
  });

  return (
    <>
      {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h3 style={{ color: "black" }}>Connecting...</h3> : null}
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.grid}>
          <PageTitle title="Prestations" path="/app/dashboard" />
        </Grid>
        <Grid item xs={6} className={classes.grid}></Grid>
        <Grid item xs={1}>
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            style={{ marginTop: "23px" }}
          >
            Recherche:
          </Typography>
        </Grid>
        <Grid xs={5} className={classes.grid}>
          <TextField
            id="outlined-basic"
            onChange={Recherche}
            variant="outlined"
            fullWidth
            size="small"
            label="Recherche"
            className={classes.searchTextField}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment>
            //       <IconButton>
            //         <SearchIcon />
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            type="small"
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={addPrestation}
          >
            <AddIcon />
            Ajouter Prestation
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
                  {/* <TableCell key="activite" style={{ minWidth: "100" }}>
                    Activité
                  </TableCell> */}
                  <TableCell key="actions" style={{ minWidth: "170" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
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
                        {/*<TableCell
                        // key={row.activites[0].nomActivite}
                        // align={row.activites[0].id}
                        >
                           {row.activites[0].nomActivite} */}
                        {/* {row.format && typeof value === "number"
                                ? row.format(value)
                                : value} */}
                        {/* </TableCell> */}
                        <TableCell>
                          <Button
                            onClick={() => {
                              ViewPrestation(row.id);
                            }}
                          >
                            {/* <i className="pe-7s-look"></i> */}
                            <VisibilityIcon className={classes.icons} />
                          </Button>
                          <Button
                            onClick={() => {
                              EditPrestation(row.id);
                            }}
                          >
                            {/* <i className="pe-7s-note"></i> */}
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
            count={prestations.length}
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

export default Prestations;
