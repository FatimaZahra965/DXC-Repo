import React from "react";
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ActiviteGlobal from "./ActiviteGlobal";
import RessourceGlobal from "./RessourceGlobal";
// styles
// import useStyles from "./styles";

export default function PrestationGlobal(props) {
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ActiviteGlobal/>
        </Grid>
        <Grid item xs={5}>
          <RessourceGlobal/>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
