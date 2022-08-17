import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import useStyles from "./styles";
import CapabiliteRessource from "./CapabiliteRessource";
import CapabiliteActivite from "./CapabiliteActivite";
import { Box, Button, Card, CardContent, Typography } from "@material-ui/core";
// import styles from "./styles";
// import clienteAxios from "../../config/axios";
// import { showRessourcesCap } from "../../services/Actions/capabiliteActions";
import { useDispatch, useSelector } from "react-redux";
import { showRessources } from "../../services/Actions/prestationsActions";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function CapabiliteDetail({ match }) {
  const classes = useStyles();
  const [capabilite, setCapabilite] = useState([]);
  const [ressourcesCapabilities, setressourcesCapabilities] = useState([]);
  const { id } = match.params.id;
  console.log("-----------------> match.params", match.params.id);
  const RessourcesToShow = useSelector(
    (state) => state.prestations.showRessources,
  );

  useEffect(() => {
    console.log("-----------------> match.params", match.params.id);
    axios
      .get(
        `https://localhost:9008/DXC/capabilites/Capabilite/` +
          match.params.id,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      )
      .then(function (res) {
        // handle success
        console.log("res capabilite by id =======>", res.data);
        setCapabilite(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [match.params.id]);
  const dispatch = useDispatch();
  const showRessource = (value) => dispatch(showRessources(value));

  const showRessourcesCap = () => {
    console.log("idCapabilite", match.params.id);
    const data = {
      idCapabilite: match.params.id,
      show: RessourcesToShow.show ? false : true,
    };
    showRessource(data);
  };
  const ActivitiesToShow = useSelector(
    (state) => state.prestations.showActivities,
  );

  console.log("ressourcesCapabilities", ressourcesCapabilities);
  return (
    <div>
      <div>
        <PageTitle title="Affichage d'une Capabilite" path="/app/capabilites" />
      </div>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box pt={1} pb={2} px={2}>
            <Card variant="outlined">
              <hr
                style={{
                  backgroundColor: "#603494",
                  width: "100%",
                  textAlign: "flex",
                }}
              ></hr>
              <Box
                display="block"
                alignItems="center"
                mt={{ xs: 2, sm: 2 }}
                ml={{ xs: 1, sm: 2 }}
                // borderRadius="10px"
                width=" 100%"
                padding="10px"
              >
                <Typography
                  variant="subtitle2"
                  className={classes.labelDonnes}
                  color="primary"
                >
                  Capabilié:
                </Typography>
                <Box>
                  <Grid item xs={2} style={{ margin: "1px" }}>
                    <Typography variant="subtitle2">
                      Intitulé:&nbsp;&nbsp;&nbsp;
                      <Typography variant="caption" fontWeight="medium">
                        {capabilite.intitule}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} style={{ margin: "1px" }}>
                    <Typography variant="subtitle2">
                      Description:&nbsp;&nbsp;&nbsp;
                      <Typography variant="caption" fontWeight="medium">
                        {capabilite.description}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid style={{ margin: "1px" }}>
                    <Button
                      onClick={() => {
                        showRessourcesCap();
                      }}
                      className={classes.showRessource}
                    >
                      <ArrowDownwardIcon></ArrowDownwardIcon>
                    </Button>
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
        {ActivitiesToShow.showAct && (
          <Grid item xs={8}>
            <Box pt={1} pb={2} px={2}>
              <Card variant="outlined">
                <hr
                  style={{
                    backgroundColor: "#603494",
                    width: "100%",
                    textAlign: "flex",
                  }}
                ></hr>
                <Box
                  display="block"
                  alignItems="center"
                  mt={{ xs: 4, sm: 2 }}
                  ml={{ xs: 2, sm: 2 }}
                  borderRadius="16px"
                  width=" 100%"
                  padding="10px"
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    className={classes.labelDonnes}
                  >
                    Activités:
                    <CapabiliteActivite />
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        )}

        {RessourcesToShow.show && (
          <Grid item xs={12}>
            {/* <Box pt={1} pb={2} px={2}> */}
            <Card variant="outlined">
              <hr
                style={{
                  backgroundColor: "#603494",
                  width: "100%",
                  textAlign: "flex",
                }}
              ></hr>
              <CardContent>
                <Box
                  display="block"
                  alignItems="center"
                  mt={{ xs: 4, sm: 2 }}
                  ml={{ xs: 2, sm: 2 }}
                  padding="12px"
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    className={classes.labelDonnes}
                  >
                    Ressources:
                    <CapabiliteRessource />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            {/* </Box>           */}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default CapabiliteDetail;
