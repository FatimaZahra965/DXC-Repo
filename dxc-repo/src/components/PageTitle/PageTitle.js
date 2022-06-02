import React, { useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./styles";
import { Typography } from "../Wrappers";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
export default function PageTitle(props) {
  var classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    // Update the document title using the browser API
  });
  return (
    <div className={classes.pageTitleContainer}>
      <Button
        className={classes.headerIcon}
        onClick={() => {
          history.push(props.path);
        }}
      >
        <i className="pe-7s-left-arrow" style={{ color: "black" }} />
      </Button>

      <Typography className={classes.typo} variant="h3" size="sm">
        {props.title}
      </Typography>
    </div>
  );
}
