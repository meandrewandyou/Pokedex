import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchInput from "./SearchInput";
import { useLocation } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
const useStyles = makeStyles((theme) => ({
  siteHeader: {
    fontFamily: "Pokemon solid",
    color: "#F94892",
  },
  toolBar: {
    padding: "10px",
  },
  textField: {
    margin: "5px",
  },
  loginFormStyle: {
    display: "flex",
    marginBottom: "-30px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "20px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  // Let's track what page user currnetly on, to render SearchInput where it's necessary
  const location = useLocation();

  return (
    <>
      <AppBar position="sticky" spacing={2}>
        <Toolbar
          style={{ backgroundColor: "#219F94" }}
          className={classes.toolBar}
        >
          <Typography className={classes.siteHeader} variant="h3">
            PokeDex
          </Typography>
          <div className={classes.loginFormStyle}>
            <LoginForm />
          </div>

          {/* Lets check the exact path and decide if we should render SearchInput */}
          {location.pathname === "/" && <SearchInput />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
