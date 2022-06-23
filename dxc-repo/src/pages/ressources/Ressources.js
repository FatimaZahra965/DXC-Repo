import React, { useEffect, useState } from "react";
//axios
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, IconButton, InputAdornment, makeStyles, Paper, TextField } from "@material-ui/core";
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
import SearchIcon from "@material-ui/icons/Search";
import { getRessourcesAction } from "../../services/Actions/ressourcesActions";
import { Alert } from "@material-ui/lab";
import useStyles from "./styles";
const columns = [
  // { id: "matricule", label: "Matricule", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 80 },
  { id: "firstName", label: "Nom", minWidth: 80 },
  { id: "lastName", label: "Prénom", minWidth: 80 },
  { id: "genre", label: "Genre", minWidth: 80 },
  { id: "dateAmbauche", label: "Date d'ambauche", minWidth: 180 },
  { id: "dateNaissance", label: "Date de naissance", minWidth: 180 },
];
const Ressources = () => {
  const history = useHistory();
  var classes = useStyles();
  const addRessource = () => {
    let path = `/app/ressources/AjouterRessource`;
    history.push(path);
  };
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [val, setVal] = useState("");
  useEffect(() => {
    //productos cuando el componente este listo
    const loadRessours = () => dispatch(getRessourcesAction());
    loadRessours();
  }, []);

  const loading = useSelector((state) => state.ressources.loading);
  const error = useSelector((state) => state.ressources.error);
  const ressources = useSelector((state) => state.ressources.ressources);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const EditRessource = (e) => {
    console.log("------>", e);
    let path = `/app/ressources/ModiferRessource/` + e;
    history.push(path);
  };
  const viewProfil=(e)=>{
    history.push("/app/prestations/profil/"+e)
  }
  const RechercheRessource = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };

  const filteredData = ressources.filter((el) => {
  
    if (val === "") {
      return el;
    } else {
      return el.firstName.toLowerCase().includes(val);
      
    }
  });
  return (
    <>
      {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h1>Connexion...</h1> : null}
       <Grid item xs={6}>
          <PageTitle title="Ressources" path="/app/dashboard" />
        </Grid>
      <Grid container spacing={3}>
       
        <Grid xs={8} className={classes.Search}>
          <TextField
            id="outlined-basic"
            onChange={RechercheRessource}
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
            onClick={addRessource}
          >
            <AddIcon></AddIcon>
            Ajouter Ressource
          </Button>
        </Grid>
        <br />
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
                  <TableCell key="actions" style={{ minWidth: "170" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
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
                        <TableCell>
                          <Button>
                            <VisibilityIcon className={classes.icons}  onClick={(e)=> {viewProfil(row.matricule)}}/>
                          </Button>
                          <Button
                            onClick={() => {
                              EditRessource(row.matricule);
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
            count={ressources.length}
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

export default Ressources;
