import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  body: {
    color: "#603494",
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
  btnAjouter: {
    margin: "5px",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
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
  textField: {
    margin: "5px",
    width: "500px",
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
}));
