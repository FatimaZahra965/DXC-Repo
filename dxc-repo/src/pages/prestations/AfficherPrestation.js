import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import PageTitle from "../../components/PageTitle/PageTitle";
import clienteAxios from "../../config/axios";
import Bill from "./Bill";
import { Box, Button, Grid, Modal, Typography } from "@material-ui/core";
import QueueIcon from "@material-ui/icons/Queue";
import ModalAddActivite from "./Modal/ModalAddActivite";
import { useSelector } from "react-redux";
import RessourceByActivite from "./RessourceByActivite/RessourceByActivite";

// end modal functions
export default function AfficherPrestation({ match }) {
  const classes = useStyles();
  const history = useHistory();

  //state
  const initialPrestationState = {
    id: null,
    type: "",
    etat: "",
    dateDebut: "",
    dateFin: "",
    titre: "",
    market: "",
    activites: [],
  };
  // prestation

  const { id } = match.params;
  const [prestationdata, setPrestationdata] = useState(initialPrestationState);
  const [prestationActivites, setPrestationActivites] = useState();
  const [act, setAct] = useState();
  const RessourcesToShow = useSelector(
    (state) => state.prestations.showRessources,
  );
  useEffect(() => {
    // console.log("id", id);
    getPrestationActivites(id);
    getPrestation(id);
  }, [id]);
  const getPrestation = (id) => {
    clienteAxios
      .get(`https://dxcrepo-prestation.azurewebsites.net/DXC/prestations/Prestation/${id}`)
      .then((resp) => {
        console.log("--------------------*>", resp.data);
        setPrestationdata(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getPrestationActivites = (id) => {
    clienteAxios
      .get(`https://dxcrepo-activite.azurewebsites.net/dxc/activites/allPrestationActivites/${id}`)
      .then((resp) => {
        console.log("allPrestationActivites", resp.data);
        setPrestationActivites(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("---------->Activite by id state ");

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = <ModalAddActivite idPrestation={id} />;
  // end modal

  return (
    <>
      <PageTitle
        title={`Voire les détails de prestation ${prestationdata.titre}`}
        path="/app/prestations/ListePrestations"
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card id="delete-account" variant="outlined">
            <Box pt={1} pb={2} px={2}>
              <Box
                component="ul"
                display="flex"
                flexDirection="column"
                p={0}
                m={1}
              >
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={2} style={{ margin: "1px" }}>
                      <Typography variant="subtitle2" color="text">
                        Titre:&nbsp;&nbsp;&nbsp;
                        <Typography variant="caption" fontWeight="medium">
                          {prestationdata.titre}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ margin: "1px" }}>
                      <Typography variant="subtitle2" color="text">
                        Etat:&nbsp;&nbsp;&nbsp;
                        <Typography variant="caption" fontWeight="medium">
                          {prestationdata.etat}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ margin: "1px" }}>
                      <Typography variant="subtitle2" color="text">
                        Marcket:&nbsp;&nbsp;&nbsp;
                        <Typography variant="caption" fontWeight="medium">
                          {prestationdata.market}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ margin: "1px" }}>
                      <Typography variant="subtitle2" color="text">
                        Date de dédut:&nbsp;&nbsp;&nbsp;
                        <Typography variant="caption" fontWeight="medium">
                          {prestationdata.dateDebut.slice(0, 10)}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ margin: "1px" }}>
                      <Typography variant="subtitle2" color="text">
                        Date de fin:&nbsp;&nbsp;&nbsp;
                        <Typography variant="caption" fontWeight="medium">
                          {prestationdata.dateFin.slice(0, 10)}
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card id="delete-account" variant="outlined">
            <Box className={classes.bntAffecteActv1}>
              <Button
                onClick={() => {
                  handleOpen();
                }}
                className={classes.bntAffecteActv}
              >
                <Typography
                  className={classes.textAfct}
                  variant="body2"
                  fontWeight="medium"
                >
                  Affecté une Activité
                </Typography>
                {/* <i className="pe-7s-look"></i> */}
                <QueueIcon className={classes.icons} />
              </Button>
            </Box>
            <Box pt={3} px={2}>
              <Typography variant="subtitle2" fontWeight="medium">
                Les informations des activités
              </Typography>
            </Box>

            <Box pt={1} pb={2} px={2}>
              <Box
                component="ul"
                display="flex"
                flexDirection="column"
                p={0}
                m={0}
              >
                {prestationActivites?.map((activite) => (
                  <Bill
                    id={activite.id}
                    nomActivite={activite.nomActivite}
                    typeActivite={activite.typeActivite}
                    status={activite.status}
                    description={activite.description}
                    categorie={activite.categorie}
                    dateDebut={activite.dateDebut}
                    dateFin={activite.dateFin}
                  />
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
        {RessourcesToShow.showRessource && (
          <Grid item xs={6}>
            <Card id="delete-account" variant="outlined">
              <Box pt={3} px={2}>
                <Typography variant="subtitle2" fontWeight="medium">
                  Les informations des Ressources
                </Typography>
              </Box>
              <Box pt={1} pb={2} px={2}>
                <Box
                  component="ul"
                  display="flex"
                  flexDirection="column"
                  p={1}
                  m={0}
                >
                  <RessourceByActivite />
                </Box>
              </Box>
            </Card>
          </Grid>
        )}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
