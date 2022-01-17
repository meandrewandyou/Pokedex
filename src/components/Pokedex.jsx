import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CircularProgress,
  Typography,
  CardContent,
  CardMedia,
  capitalize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

// useStyles is CSS, but for MUI, to use directly in the component

const useStyles = makeStyles({
  pokemonCardsArea: {
    paddingTop: "30px",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  pokemonCard: {
    borderRadius: "15%",
  },
  pokemonImage: {
    height: "200px",
    width: "200px",
  },
});

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();
  // navigate is new history.push. Used to render components depending on routes in
  // react-router-dom v6.
  const navigate = useNavigate();
  // That's the way to get searchInputValue outta redux
  const { searchInputValue } = useSelector((state) => state.pokemonSearch);
  useEffect(() => {
    // axios is library for making API request. In this GET request we getting back all the
    // data for pokemons, but we don't need that much data, so newPokemonData created and then
    // set as a pokemonData
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=649")
      .then((response) => {
        const { results } = response.data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            imageUrl: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
              index + 1
            }.svg`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);
  const renderCards = (pokemonId) => {
    const { name, id, imageUrl } = pokemonData[pokemonId];
    return (
      <Grid key={pokemonId} item xs={12} sm={6} md={4}>
        <Card
          className={classes.pokemonCard}
          onClick={() => {
            navigate(`/${pokemonId}`);
          }}
        >
          <CardContent align="center">
            <Typography>{"Name: " + capitalize(`${name}`)}</Typography>
            <Typography>{`ID: ${id}`}</Typography>
            <CardMedia>
              <img
                style={{ height: "200px", width: "200px" }}
                alt=""
                src={imageUrl}
              />
            </CardMedia>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      {pokemonData ? (
        <Grid container spacing={4} className={classes.pokemonCardsArea}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(searchInputValue) &&
              renderCards(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
