import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    // justifyContent: "space-between",
    // marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(1),
  },
  typo: {
    backgroundColor: "#603494",
    borderBottom: "2px  #603494",
    float: "left",
    marginLeft: "-70px",
    width: "1182px",
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    "&:active": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
  hrGlobale: {
    margin: "5px",
    backgroundColor: "#603494",
  },

  headerIcon: {
    fontSize: 28,
  },
}));
