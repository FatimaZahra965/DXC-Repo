import React from "react";
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Competances from "../competances/Competances";
import Prestations from "../prestations/Prestations";
// styles
// import useStyles from "./styles";

export default function Dashboard(props) {
  // var classes = useStyles();
  // var theme = useTheme();
  // local
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    maxheight : "400px",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
     
      <h1>Accueil</h1>
    </>
  );
}
