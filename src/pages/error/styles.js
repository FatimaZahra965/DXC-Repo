import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#603494",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    backgroundColor: "#f6f7ff",
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logotypeImage: {
    width: 300,
    marginBottom: theme.spacing(4),
  },
  logotype: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logotypeText: {
    color: "black",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  logotypeIcon: {
    width: 70,
    marginRight: theme.spacing(2),
  },
  paperRoot: {
    backgroundColor: "#f6f7ff",
    boxShadow: theme.customShadows.widgetDark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    maxWidth: 404,
  },
  textRow: {
    marginBottom: theme.spacing(10),
    color: "#603494",
    textAlign: "center",
  },
  errorCode: {
    fontSize: 148,
    fontWeight: 600,
  },
  safetyText: {
    fontWeight: 300,
    color: theme.palette.text.hint,
  },
  backButton: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    fontSize: 22,
  },
}));
