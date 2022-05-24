import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { setValue } from "../../redux/slices/pokemonSearch";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  textField: {
    margin: "5px",
  },
  searchDiv: {
    display: "flex",
    marginBottom: "-20px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "",
    transition: "all 1s",
    "&:hover": {
      transform: "scale3d(1.1, 1.1, 1)",
      transition: "all 1s",
    },
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
});

const SearchInput = () => {
  const classes = useStyles();
  // NavBar now is individual component, so to be still able easilly filter pokemons at Pokedex
  // , we need TextFIeld's value/state to be avaiable all over the app. useDispatch stands for
  // calling actions, SetValue is action to store inputText in Redux.
  const dispatch = useDispatch();
  const filterPokemons = (e) => {
    const inputText = e.target.value;
    dispatch(setValue(inputText));
  };

  return (
    <div className={classes.searchDiv}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        className={classes.textField}
        label="Search for pokemon"
        onChange={filterPokemons}
        variant="standard"
        InputLabelProps={{ style: { color: "#E3BEC6" } }}
      />
    </div>
  );
};

export default SearchInput;
