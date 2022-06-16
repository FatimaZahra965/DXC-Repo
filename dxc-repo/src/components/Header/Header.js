import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  Menu as MenuIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";
// styles
import useStyles from "./styles";
// components
import { Typography } from "../Wrappers";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";

export default function Header(props) {
  var classes = useStyles();
  let history = useHistory();
  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [mailMenu, setMailMenu] = useState(null);
  var [profileMenu, setProfileMenu] = useState(null);
  function Profil() {
    history.push("/app/prestations/profil");
  }
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <i
              className="pe-7s-angle-left"
              style={{ color: "#603494", fontSize: "2.8rem" }}
            />
          ) : (
            <i
              className="pe-7s-menu"
              style={{ color: "#603494", fontSize: "2.0rem" }}
            />
          )}
        </IconButton>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/DXC-Logo.svg`}
            alt="logo_dxc"
            className={classes.logoimage}
          />
        </div>
        <div className={classes.grow} />
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          className={classes.headerMenuButton}
        ></IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
        >
          <i
            className="pe-7s-bell"
            classes={{ root: classes.headerIcon }}
            style={{ color: "black" }}
          ></i>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
        >
          <i
            className="pe-7s-global"
            classes={{ root: classes.headerIcon }}
            style={{ color: "black" }}
          ></i>
        </IconButton>
        {/* <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
        >
          <Brightness6
            classes={{ root: classes.headerIcon }}
            style={{ color: "black" }}
          />
        </IconButton> */}

        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <i
            className="pe-7s-user"
            classes={{ root: classes.headerIcon }}
            style={{ color: "black" }}
          ></i>
        </IconButton>

        <Menu
          id="mail-menu"
          open={Boolean(mailMenu)}
          anchorEl={mailMenu}
          onClose={() => setMailMenu(null)}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        ></Menu>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              John Smith
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
            >
              Post Occupé
            </Typography>
          </div>
          <Button onClick={Profil}>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
                      <AccountIcon className={classes.profileMenuIcon}  /> Profile
          </MenuItem>
 </Button> 
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
