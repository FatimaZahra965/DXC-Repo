import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box } from "@material-ui/core";

//icons
// import {
//   mdiFacebook as FacebookIcon,
//   mdiTwitter as TwitterIcon,
//   mdiGithub as GithubIcon,
// } from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Notifications from "../../pages/notifications";

// context
import { useLayoutState } from "../../context/LayoutContext";
import Capabilites from "../../pages/capabilites/Capabilites";
import Competances from "../../pages/competances/Competances";
import Clients from "../../pages/clients";
import Ressources from "../../pages/ressources/Ressources";
import Activites from "../../pages/activites/Activites";
import Technologies from "../../pages/technologies/Technologies";
import Projets from "../../pages/projets/Projets";
import Parametres from "../../pages/parametres/Parametres";
import AjouterPrestation from "../../pages/prestations/AjouterPrestation";
import ModiferPrestation from "../../pages/prestations/ModiferPrestation";
import Prestations from "../../pages/prestations/Prestations";
import AfficherPrestation from "../../pages/prestations/AfficherPrestation";
import AjouterRessource from "../../pages/ressources/AjouterRessource";
import ModiferRessource from "../../pages/ressources/ModiferRessource";
import AfficherRessource from "../../pages/ressources/AfficherRessource";
import Certifications from "../../pages/certifications/Certifications";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/capabilites" component={Capabilites} />
            <Route path="/app/competances" component={Competances} />
            <Route path="/app/certifications" component={Certifications} />
            <Route path="/app/notifications" component={Notifications} />

            <Route
              path="/app/prestations/allPrestation"
              component={Prestations}
            />
            <Route path="/app/prestations/clients" component={Prestations} />
            <Route path="/app/ressources" component={Ressources} />
            <Route path="/app/prestations/activites" component={Activites} />
            <Route
              path="/app/prestations/technologies"
              component={Technologies}
            />
            <Route path="/app/prestations/projets" component={Projets} />
            <Route path="/app/parametres" component={Parametres} />
            <Route
              path="/app/ressources/AjouterRessource"
              component={AjouterRessource}
            />
            <Route
              path="/app/ressources/ModiferRessource/:id"
              component={ModiferRessource}
            />
            <Route
              path="/app/ressources/AfficherRessource/:id"
              component={AfficherRessource}
            />

            <Route
              path="/app/prestations/AjouterPrestation"
              component={AjouterPrestation}
            />
            {/* <Route
              path="/app/prestations/ModiferPrestation/:id"
              component={ModiferPrestation}
            />
            <Route
              path="/app/prestations/AficherPrestation/:id"
              component={AfficherPrestation}
            /> */}
          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div alignItems={"center"}>
              <p>
                {/* © Copyright 2022 DXC Technology Company. All rights reserved */}
              </p>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
