import React, { useEffect } from "react";

//axios
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
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
import { getRessourcesAction } from "../../services/Actions/ressourcesActions";

const columns = [
  // { id: "matricule", label: "Matricule", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "firstName", label: "Nom", minWidth: 100 },
  { id: "lastName", label: "Prénom", minWidth: 100 },
  { id: "genre", label: "Genre", minWidth: 100 },
  { id: "dateAmbauche", label: "Date d'ambauche", minWidth: 180 },
  { id: "dateNaissance", label: "Date de naissance", minWidth: 180 },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "00px",
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
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
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

  // const EditRessource = (e) => {
  //   let path = `/app/ressources/ModiferRessource/` + 1;
  //   history.push(path);
  // };
  // const ViewRessource = (e) => {
  //   let path = `/app/ressources/AfficherRessurce/` + 1;
  //   history.push(path);
  // };
  return (
    <>
      {error ? (
        <div className="font-wight-bold alert alert-danger text-center mt-5">
          Hubo un error...
        </div>
      ) : null}

      {loading ? <h1>Connecting...</h1> : null}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PageTitle title="Ressources" />
        </Grid>
        <Grid item xs={6}>
          <Button
            type="small"
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={addRessource}
          >
            <AddIcon />
            Ajouter Ressource
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
                  <TableCell key="actions" style={{ minWidth: "170" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ressources
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
                        <TableCell>
                          <Button>
                            <VisibilityIcon className={classes.icons} />
                          </Button>
                          <Button>
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
