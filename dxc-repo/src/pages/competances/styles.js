import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  root: {
    backgroundColor:"#FFFFFF",
    minWidth: 300,
    minHeight: 200,
    maxHeight: 300,
    border: "3px solid #FFFFFF",
    marginBottom: "10px",
   

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  Bajoute: {
    textAlign: "end",
  },
  Button: {
    background: "#741F82",
    color: "#FFFFFF",
  },
  
  text: {
    color: "#5C59E9",
    marginLeft: "8px",
  },
  ButtonAction: {
    background: "#741F82",
    Width: 10,
    Height: 5,
  },
  InputSearch: {
    background: "#FFFFFF",
    minWidth: 260,
    Height: 26,
    display: "flex",
    marginRight: 1,
    border: "2px solid #741F82",
    borderRadius: "10px",
  },
  ButtonSearch: {
    background: "#741F82",
    Stroke: "Solid",
    Align: "Inside",
    minWidth: 22,
    height: 35,
    color: "#FFFFFF",
    borderRadius: "10px",
  },
  Search: {
    textAlign: "initial",
    display: "flex",
    padding: 8,
    position: "absolute",
  },
  Visibility: {
    textAlign: "end",
    color: "#FFFFFF",
    fontSize: "medium",
  },
  labelDonnes: {
    color: "#000000",
    Stroke: "Solid",
    marginTop: "inherit",
  },
  
  labelinformation: {
    color: "#7978BB",
    Stroke: "Solid",
    textAlign:"center",
    marginTop: "inherit",
  },
  label: {
    color: "#741F82",
    Stroke: "Solid",
    textAlign:"center",
    marginTop: "inherit",
  },
  buttons: {
    textAlign:"center",
  },
  Visib: {
    background: "#741F82",
    minWidth: 30,
    height: 30,
  },
  title: {
    fontSize: "9",
  },
  btnAjouter: {
    margin: "5px",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
  },
  tabscompt: {
    textAlign:"centre",
    
  },
  btnAnnuler: {
    margin: "5px",
    float: "right",
    background: "black",
    color: "white",
  },
}));
