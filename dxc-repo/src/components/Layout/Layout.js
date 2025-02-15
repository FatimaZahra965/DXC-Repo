import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box } from "@material-ui/core";

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
import AjouteContrat from "../../pages/contrats/AjouteContrat";
import Contrats from "../../pages/contrats/Contrats";
import EditClient from "../../pages/clients/EditClient";
import AffichageClient from "../../pages/clients/AffichageClient";
import AjouterRessource from "../../pages/ressources/AjouterRessource";
import ModiferRessource from "../../pages/ressources/ModiferRessource";
import AfficherRessource from "../../pages/ressources/AfficherRessource";
import Certifications from "../../pages/certifications/Certifications";
import EditCompetance from "../../pages/competances/EditCompetance";
import CompetanceDetail from "../../pages/competances/CompetanceDetail";
import AjouterCertification from "../../pages/certifications/AjouterCertification";
import Profil from "../../pages/profil/Profil";
import AjouterActivite from "../../pages/activites/AjouterActivite";
import ModifierActivite from "../../pages/activites/ModifierActivite";
import AfficherPrestation from "../../pages/prestations/AfficherPrestation";
import AjouteCompetance from "../../pages/competances/AjouteCompetances";
import AjouteClient from "../../pages/clients/AjouteClient";
import ContratDetail from "../../pages/contrats/ContratDetail";
import EditContrat from "../../pages/contrats/EditContrat";
import CapabiliteDetail from "../../pages/capabilites/CapabiliteDetail";
import AjouteCapabilite from "../../pages/capabilites/AjouteCapabilite";
import EditCapabilite from "../../pages/capabilites/EditCapabilite";

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
            {/*  route dashboard  */}
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/prestations/profil/:id" component={Profil} />
            <Route path="/app/capabilites" component={Capabilites} />
            <Route
              path="/app/competances/allCompetances"
              component={Competances}
            />
            <Route
              path="/app/competances/ajouteCompetance"
              component={AjouteCompetance}
            />
            <Route
              key="1"
              path="/app/certifications/ListeCertifications"
              component={Certifications}
            />
            <Route
              path="/app/certifications/AjouterCertification"
              component={AjouterCertification}
            />
            <Route path="/app/notifications" component={Notifications} />

            <Route
              path="/app/prestations/ListePrestations"
              component={Prestations}
            />
            <Route path="/app/prestations/clients" component={Clients} />
            <Route path="/app/clients/AjouteClient" component={AjouteClient} />
            <Route
              path="/app/clients/AffichageClients"
              component={AffichageClient}
            />
            <Route path="/app/prestations/Contrats" component={Contrats} />
            <Route
              path="/app/Contrats/ContratDetail/:id"
              component={ContratDetail}
            />
            <Route
              path="/app/Contrats/AjouteContrat"
              component={AjouteContrat}
            />
            <Route
              path="/app/Contrats/EditContrat/:id"
              component={EditContrat}
            />
            <Route path="/app/prestations/ressources" component={Ressources} />

            {/*  routes Competances  */}
            <Route
              path="/app/competances/allCompetances"
              component={Competances}
            />
            <Route
              path="/app/competances/ajouteCompetance"
              component={AjouteCompetance}
            />
            <Route
              path="/app/competances/CompetanceDetail/:id"
              component={CompetanceDetail}
            />
            <Route
              path="/app/competances/EditCompetance/:id"
              component={EditCompetance}
            />

            {/*  routes prestations  */}
            <Route
              path="/app/prestations/allPrestation"
              component={Prestations}
            />
            <Route
              path="/app/prestations/AjouterPrestation"
              component={AjouterPrestation}
            />
            {/* <Route path="/app/prestations/ModiferPrestation/:id"  component={ModiferPrestation} />*/}
            <Route
              path="/app/prestations/AficherPrestation/:id"
              component={AfficherPrestation}
            />

            {/*  routes clients  */}
            <Route path="/app/prestations/clients" component={Clients} />
            <Route path="/app/clients/AjouteClient" component={AjouteClient} />
            <Route
              path="/app/clients/AffichageClient/:id"
              component={AffichageClient}
            />
            <Route path="/app/clients/EditClient/:id" component={EditClient} />

            {/*  routes Contrats  */}
            <Route path="/app/prestations/Contrats" component={Contrats} />
            <Route
              path="/app/Contrats/ContratDetail/:id"
              component={ContratDetail}
            />
            <Route
              path="/app/Contrats/AjouteContrat"
              component={AjouteContrat}
            />
            <Route
              path="/app/Contrats/EditContrat/:id"
              component={EditContrat}
            />

            {/*  routes Ressources  */}
            <Route path="/app/prestations/ressources" component={Ressources} />
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
            {/* routes activiteés */}
            <Route path="/app/prestations/activites" component={Activites} />
            <Route
              path="/app/activites/AjouteAactivite"
              component={AjouterActivite}
            />
            <Route
              path="/app/activites/ModifierAactivite/:id"
              component={ModifierActivite}
            />
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
            <Route
              path="/app/prestations/ModiferPrestation/:id"
              component={ModiferPrestation}
            />
            {/* <Route
              path="/app/prestations/AficherPrestation/:id"
              component={AfficherPrestation}
            /> */}
            <Route
              path="/app/certifications/ListeCertifications"
              component={Certifications}
            />
            <Route
              path="/app/certifications/AjouterCertification"
              component={AjouterCertification}
            />
            <Route path="/app/notifications" component={Notifications} />
            <Route path="/app/capabilites" component={Capabilites} />

            <Route
              path="/app/CapabiliteDetail/:id"
              component={CapabiliteDetail}
            />
            <Route path="/app/AjouteCapabilite" component={AjouteCapabilite} />
            <Route path="/app/EditCapabilite/:id" component={EditCapabilite} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
