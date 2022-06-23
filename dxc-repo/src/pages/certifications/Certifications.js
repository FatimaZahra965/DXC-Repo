import React, { useEffect } from "react";

//axios
import { useDispatch, useSelector } from "react-redux";
// import { getPrestationsAction } from "../../services/Actions/prestationsActions";
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
import { Alert } from "@material-ui/lab";
import {
  // getCertificationAction,
  getCertificationsAction,
} from "../../services/Actions/certificationsActions";

const columns = [
  { id: "code", label: "Code", minWidth: 100 },
  { id: "titre", label: "Titre", minWidth: 100 },
  {
    id: "datecertification",
    label: "Date Certification",
    minWidth: 100,
  },
  { id: "ressourceid", label: "Ressource id", minWidth: 100 },
  { id: "niveau", label: "Niveau", minWidth: 180 },
  { id: "validation", label: "Validation", minWidth: 180 },
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
const Certifications = () => {
  const history = useHistory();
  var classes = useStyles();
  const addCertification = () => {
    let path = `/app/certifications/AjouterCertification`;
    history.push(path);
  };
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    const loadCertifications = () => dispatch(getCertificationsAction());
    loadCertifications();
  }, []);

  const loading = useSelector((state) => state.certifications.loading);
  const error = useSelector((state) => state.certifications.error);
  const certifications = useSelector(
    (state) => state.certifications.certifications,
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const EditCertif = (e) => {
    let path = `/app/certifications/ModifierCertification/` + e;
    history.push(path);
  };
  // const ViewPrestation = (e) => {
  //   let path = `/app/certifications/AfficherPrestation/` + 1;
  //   history.push(path);
  // };
  return (
    <>
      {error ? (
        <Alert severity="error">Problème de chargement ...!</Alert>
      ) : null}

      {loading ? <h1>Connecting...</h1> : null}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PageTitle title="Certifications" path="/app/dashboard" />
        </Grid>
        <Grid item xs={6}>
          <Button
            type="small"
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={addCertification}
          >
            <AddIcon />
            Ajouter Certification
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
                {certifications
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
                          <Button
                            onClick={() => {
                              EditCertif(row.id);
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
            count={certifications.length}
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

export default Certifications;
