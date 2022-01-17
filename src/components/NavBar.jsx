import React from "react";
import { Toolbar, AppBar, TextField } from "@material-ui/core";
import { setValue } from "../redux/slices/pokemonSearch";
import { useDispatch } from "react-redux";

// NavBar now is individual component, so to be still able easilly filter pokemons at Pokedex
// , we need TextFIeld's value/state to be avaiable all over the app. useDispatch stands for
// calling actions, SetValue is action to store inputText in Redux.

const NavBar = () => {
  const dispatch = useDispatch();
  const filterPokemons = (e) => {
    const inputText = e.target.value;
    dispatch(setValue(inputText));
  };
  return (
    <>
      <AppBar position="static" spacing={2}>
        Pokedex
        <Toolbar>
          <TextField label="Search for pokemon" onChange={filterPokemons} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
