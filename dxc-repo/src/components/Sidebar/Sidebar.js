import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  BorderAll as TableIcon,
  ArrowBack as ArrowBackIcon,
  Subject,
  Work,
  Settings,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import CardMembershipIcon from "@material-ui/icons/CardMembership";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  {
    id: 0,
    label: "Accueil DXC Repo",
    link: "/app/dashboard",
    icon: (
      <IconButton>
        <i className="pe-7s-home" />
      </IconButton>
    ),
  },
  {
    id: 1,
    label: "Capabilités",
    link: "/app/capabilites",
    icon: (
      <IconButton>
        <i className="pe-7s-photo-gallery" />
      </IconButton>
    ),
  },
  {
    id: 2,
    label: "Compétances",
    link: "/app/competances/allCompetances",
    icon: (
      <IconButton>
        <i className="pe-7s-medal" />
      </IconButton>
    ),
  },
  {
    id: 3,
    label: "Notifications",
    link: "/app/notifications",
    icon: (
      <IconButton>
        <i className="pe-7s-bell" />
      </IconButton>
    ),
  },
  {
    id: 4,
    label: "Prestations",
    icon: (
      <IconButton>
        <i className="pe-7s-folder" />
      </IconButton>
    ),
    children: [
      {
        label: "Liste des Prestations",
        link: "/app/prestations/ListePrestations",
      },
      { label: "Contrats", link: "/app/prestations/Contrats" },
      { label: "Clients", link: "/app/prestations/clients" },
      { label: "Ressources", link: "/app/prestations/ressources" },
      { label: "Activités", link: "/app/prestations/activites" },
      { label: "Téchnologies", link: "/app/prestations/technologies" },
      { label: "Projets", link: "/app/prestations/projets" },
    ],
  },
  {
    id: 5,
    label: "Parametres",
    link: "/app/parametres",
    icon: (
      <IconButton>
        <i className="pe-7s-tools" />
      </IconButton>
    ),
  },
  {
    id: 6,
    label: "Certifications",
    link: "/app/certifications/ListeCertifications",
    icon: (
      <IconButton>
        <i className="pe-7s-ribbon" />
      </IconButton>
    ),
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
