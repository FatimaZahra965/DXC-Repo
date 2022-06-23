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
    label: "Accueil",
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
    label: "Prestations",
    icon: (
      <IconButton>
        <i className="pe-7s-folder" />
      </IconButton>
    ),
    children: [
      {
        label: "Prestations",
        link: "/app/prestations/ListePrestations",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-network" />
          </IconButton>
        ),
      },
      {
        label: "Contrats",
        link: "/app/prestations/Contrats",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-id" />
          </IconButton>
        ),
      },
      {
        label: "Clients",
        link: "/app/prestations/clients",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-way" />
          </IconButton>
        ),
      },
      {
        label: "Activités",
        link: "/app/prestations/activites",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-albums" />
          </IconButton>
        ),
      },
      {
        label: "Projets",
        link: "/app/prestations/projets",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-news-paper" />
          </IconButton>
        ),
      },
    ],
  },

  {
    id: 3,
    label: "Ressources",
    icon: (
      <IconButton>
        <i className="pe-7s-users" />
      </IconButton>
    ),
    children: [
      {
        label: "Ressources",
        link: "/app/prestations/ressources",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-users" />
          </IconButton>
        ),
      },
      {
        label: "Certifications",
        link: "/app/certifications/ListeCertifications",
        icon: (
          <IconButton>
            <i className="pe-7s-ribbon" />
          </IconButton>
        ),
      },
      {
        label: "Compétences",
        link: "/app/competances/allCompetances",
        icon: (
          <IconButton>
            <i className="pe-7s-medal" />
          </IconButton>
        ),
      },
      {
        label: "Téchnologies",
        link: "/app/prestations/technologies",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-star" />
          </IconButton>
        ),
      },
    ],
  },
  {
    id: 4,
    label: "Notifications",
    link: "/app/notifications",
    icon: (
      <IconButton>
        <i className="pe-7s-bell" />
      </IconButton>
    ),
    children: [
      {
        label: "Liste des Prestations",
        link: "/app/prestations/ListePrestations",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-network" />
          </IconButton>
        ),
      },
      {
        label: "Contrats",
        link: "/app/prestations/Contrats",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-id" />
          </IconButton>
        ),
      },
      {
        label: "Clients",
        link: "/app/prestations/clients",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-way" />
          </IconButton>
        ),
      },
      {
        label: "Ressources",
        link: "/app/prestations/ressources",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-users" />
          </IconButton>
        ),
      },
      {
        label: "Activités",
        link: "/app/prestations/activites",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-albums" />
          </IconButton>
        ),
      },
      {
        label: "Téchnologies",
        link: "/app/prestations/technologies",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-star" />
          </IconButton>
        ),
      },
      {
        label: "Projets",
        link: "/app/prestations/projets",
        icon: (
          <IconButton style={{ fontSize: "1.1rem" }}>
            <i className="pe-7s-news-paper" />
          </IconButton>
        ),
      },
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
