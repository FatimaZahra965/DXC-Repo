import { Box, Button, Card, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "./style.js";
import { useSelector } from "react-redux";
import clienteAxios from "../../../config/axios.js";
import { useHistory } from "react-router-dom";

export default function RessourceByActivite() {
  const classes = useStyles();
  const history = useHistory();
  const RessourcesToShow = useSelector(
    (state) => state.prestations.showRessources,
  );
  const [acts, setActs] = useState([]);
  useEffect(() => {
    console.log("id", RessourcesToShow);
    clienteAxios
      .get(
        `https://localhost:9000/DXC/ressource/act/${RessourcesToShow.idRessource}`,
      )
      .then((res) => {
        console.log("hak hak hak hak ", res.data);
        setActs(res.data);
      })
      .catch((error) => {
        console.log(error);
        //si hay un error
      });
  });
  const viewProfil = (e) => {
    history.push("/app/prestations/profil/" + e);
  };
  return (
    <>
      {acts.map((ressource) => (
        <Card
          id="delete-account"
          variant="outlined"
          className={classes.cardRessource}
        >
          <Box pt={1} pb={2} px={2}>
            <Box
              component="ul"
              display="flex"
              flexDirection="column"
              p={0}
              m={0}
            >
              <hr
                style={{
                  backgroundColor: "#603494",
                  width: "100%",
                  textAlign: "flex",
                }}
              ></hr>
              <Box
                component="li"
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                bgColor="grey-100"
                borderRadius="lg"
                p={3}
                mt={2}
              >
                <Box width="100%" display="flex" flexDirection="column">
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography
                      variant="button"
                      fontWeight="medium"
                      textTransform="capitalize"
                    >
                      <AccountCircleIcon className={classes.iconUser} />
                      {ressource.lastname + " " + ressource.firstname}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      mt={{ xs: 2, sm: 0 }}
                      ml={{ xs: -1.5, sm: 0 }}
                    >
                      <Box mr={1}>
                        <Button variant="text" color="error">
                          <EditIcon className={classes.icons} />
                        </Button>
                      </Box>
                      <Button
                        variant="text"
                        color="dark"
                        onClick={(e) => {
                          viewProfil(ressource.matricule);
                        }}
                      >
                        <VisibilityIcon className={classes.icons} />
                      </Button>
                    </Box>
                  </Box>
                  <Typography variant="caption" color="text">
                    Status:&nbsp;&nbsp;&nbsp;
                    <Typography variant="caption" fontWeight="medium">
                      {ressource.status}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
}
