import React from "react";
import { Toolbar, AppBar, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" spacing={2}>
        Pokedex
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
