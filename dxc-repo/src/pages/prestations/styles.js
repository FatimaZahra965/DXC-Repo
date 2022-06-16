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
  btnAnnuler: {
    margin: "5px",
    float: "right",
    background: "black",
    color: "white",
  },
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "00px",
    color: "#603494",
  },
  addBtn: {
    display: "flex",
    justifyContent: "space-between",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
    // height: "30px",
    marginBottom: "10px",
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  grid: {
    height: "50px",
  },
  searchTextField: {
    display: "flex",
    justifyContent: "space-between",
    float: "left",
    marginTop: "27px",
    width: "auto",
  },
  bText: {
    padding: "10px",
  },
  // style modal
  paper: {
    position: "absolute",
    width: 600,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid purple",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  bntAffecteActv1: {
    float: "right",
  },
  bntAffecteActv: {
    marginTop: "13px",
  },
  textAfct: {
    color: "#603494",
    margin: "4px",
  },
  iconUser: {
    float: "left",
    width: "1.5em",
  },
  cardRessource: {
    margin: "5px",
    backgroundColor: "#603494",
  },
}));
