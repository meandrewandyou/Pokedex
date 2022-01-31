import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchInput from "./searchInput";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  siteHeader: {
    fontFamily: "Pokemon solid",
    color: "#F94892",
  },
  toolBar: {
    padding: "20px",
  },
  textField: {
    margin: "5px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  // Let's track what page user currnetly on, to render SearchInput where it's necessary
  const location = useLocation();

  return (
    <>
      <AppBar position="static" spacing={2}>
        <Toolbar
          style={{ backgroundColor: "#219F94" }}
          className={classes.toolBar}
        >
          <Typography className={classes.siteHeader} variant="h3">
            PokeDex
          </Typography>
          {/* Lets check the exact path and decide if we should render SearchInput */}
          {location.pathname === "/" && <SearchInput />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
