import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
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
import { getPrestationsAction } from "../../services/Actions/prestationsActions";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { id: "titre", label: "Titre", minWidth: 170 },
  { id: "etat", label: "Etat", minWidth: 170 },
  { id: "market", label: "Market", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 170 },
  { id: "dateDebut", label: "Date de Début", minWidth: 100 },
  { id: "dateFin", label: "Date de Fin", minWidth: 100 },
];

function createData(titre, etat, market, type, dateDebut, dateFin) {
  return { titre, etat, market, type, dateDebut, dateFin };
}

const rows = [
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
  createData("India", "IN", "1324171354", "3287263", "20-02-2263", "20-0-2022"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "18px",
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

export default function Prestations() {
  var classes = useStyles();
  const history = useHistory();
  const addPrestation = () => {
    let path = `/app/prestations/AjouterPrestation`;
    history.push(path);
  };
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    //productos cuando el componente este listo
    const loedPrestations = () => dispatch(getPrestationsAction());
    loedPrestations();
  }, []);

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

  // const EditPrestation = (e) => {
  //   let path = `/app/prestations/ModiferPrestation/` + 1;
  //   history.push(path);
  // };
  // const ViewPrestation = (e) => {
  //   let path = `/app/prestations/AfficherPrestation/` + 1;
  //   history.push(path);
  // };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PageTitle title="Prestations" />
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
        {prestations.map((prestation) => {
          <h1>{prestation.titre}</h1>;
        })}
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
                {rows
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </>
  );
}
