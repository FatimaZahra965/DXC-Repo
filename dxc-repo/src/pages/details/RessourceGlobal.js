import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Axios } from "axios";
import { getRessourcesAction } from "../../services/Actions/ressourcesActions";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        maxheight: theme.spacing(400),
      },
    },
  }));

const RessourceGlobal = () => {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ressources.loading);
  const error = useSelector((state) => state.ressources.error);
  const ressources = useSelector((state) => state.ressources.ressources);

  useEffect(() => {
    const loadRessources = () => dispatch(getRessourcesAction());
    loadRessources();
  }, []);

  return (
  <div className={classes.root}>

    <Paper elevation={3}>
    <TableContainer >
               <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {ressources.map((ressource) => (
                 <TableRow key={ressource.firstName}>
                    <TableCell component="th" scope="row">
                       {ressource.firstName}
                    </TableCell>
                     <TableCell component="th" scope="row">
                       {ressource.lastName}
                     </TableCell>
                   </TableRow>
                ))}
             </TableBody>
          </Table>
        </TableContainer>
    </Paper>

    </div>
//     <>
     
// 
  );
};

export default RessourceGlobal;