import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  pageTitleContainer: {
    display: "flex",
    // justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(1),
  },
  typo: {
    color: "solid #s757575",
    //borderBottom: "2px solid #757575",
    minWidth: 1300,
    fontSize: "8px",
    margin: "auto",
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    "&:active": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
}));
