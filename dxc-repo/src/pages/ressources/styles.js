import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
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
  btnAnnuler: {
    margin: "5px",
    float: "right",
    background: "black",
    color: "white",
  },
  Alert: {
    paddingBottom: "inherit",
  },
}));
