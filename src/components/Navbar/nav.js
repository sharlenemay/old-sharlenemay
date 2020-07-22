import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  IconButton,
  Icon,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./nav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 3,
  },
  appbar: {
    backgroundColor: "white",
    boxShadow: "none",
    alignItems: "center"
  },
  tabs: {
    color: "black",
    textDecoration: "none",
    textTransform: "lowercase",
    background: "transparent"
  },
  sharlenemay: {
    color: "black",
    textDecoration: "none",
    textTransform: "none",
    fontWeight: 700,
    fontSize: 20
  },
  link: {
    textDecoration: "none",
  },
  activeTab: {
    color: "#a9ccaf",
    textDecoration: "none",
    textTransform: "lowercase",
    background: "transparent",
  },
  padding: {
    paddingLeft: 0,
    left: 0,
  },
  menuButton: {
    color: "black",
    display: "none",
  },
  menuItem: {
    color: "black",
    fontFamily: "'Times New Roman', Times, serif",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };

  const handleRedirectAbout = () => {
    window.location.pathname = "/about";
  };

  const handleRedirectProjects = () => {
    window.location.pathname = "/projects";
  };

  const handleRedirectContact = () => {
    window.location.pathname = "/contact";
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.padding}>

          <Tabs className={(classes.appbar, "menuburger")}>

            <Link className={(classes.link, "sharlenemay")} to="/">
              <Tab 
              className={classes.sharlenemay}
              label="Sharlene May"
              />
            </Link>

            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.menuButton}
              id="hamburger"
            >
              <Icon className={classes.menuButton} id="hamburger">
                menu
              </Icon>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectAbout}
              >
                about
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectProjects}
              >
                projects
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectContact}
              >
                contact
              </MenuItem>
            </Menu>

            <Link className={(classes.link, "navtab")} to="/about">
              <Tab
                className={classes.tabs
                }
                label="About"
              />
            </Link>
            <Link className={(classes.link, "navtab")} to="/projects">
              <Tab
                className={classes.tabs
                }
                label="Projects"
              />
            </Link>
            <Link className={(classes.link, "navtab")} to="/contact">
              <Tab
                className={classes.tabs
                }
                label="Contact"
              />
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
