import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  body: {
    color: "#603494",
  },
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "00px",
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  btnAnnuler: {
    margin: "5px",
    float: "right",
    background: "black",
    color: "white",
  },
  Alert: {
    paddingBottom: "inherit",
  },
  hrGlobale: {
    margin: "5px",
    backgroundColor: "#603494",
  },
  hr: {
    margin: "5px",
    width: "500px",
    float: "left",
    backgroundColor: "#603494",
  },
  gridBorder: {
    // border: "thick double #32a1ce",
  },
  Btext: {
    color: "#603494",
  },

  GridForm: {
    marginLeft: "70px",
    margin: "20px 0px 20px 0px",
    backgroundColor: "transparent",
    maxWidth: 1000,
    
  },
  Form: {
    marginLeft: "60px",
    backgroundColor: "transparent",
    maxWidth: 1100,
  },
  Search: {
    textAlign: "initial",
    display: "flex",
    padding: 10,
    position: "absolute",
    marginLeft: "75px",
  },
  Button: {
    background: "#741F82",
    color: "#FFFFFF",
  },
  Bajoute: {
    textAlign: "end",
    marginLeft: "800px",
  },
}));
