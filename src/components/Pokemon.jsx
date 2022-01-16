import {
  capitalize,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { React, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles({
  pokemonCard: {
    minWidth: "400px",
    marginTop: "3em",
  },
  cardHeader: {
    fontSize: "3rem",
  },
});

const Pokemon = () => {
  const params = useParams();
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemonId]);

  const renderPokemonCard = () => {
    const { name, height, weight, sprites, types } = pokemon;
    const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
    const logoUrl =
      sprites.versions["generation-v"]["black-white"].animated.front_default;

    return (
      <>
        <AppBar position="static" spacing={2}>
          Pokedex
          <Toolbar></Toolbar>
        </AppBar>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid className={classes.pokemonCard} item xs={6}>
            <Card>
              <CardContent>
                <Typography align="center" variant="h2">
                  {capitalize(name)} <img src={logoUrl} alt="" />
                </Typography>
                <CardMedia component="img" image={imageUrl} />
                <Typography variant="h6">{`Height: ${height}`}</Typography>
                <Typography variant="h6">{`Weight: ${weight}`}</Typography>
                <Typography variant="h6">
                  Types:
                  {types.map((typeInfo, i) => {
                    return (
                      <Typography key={i}>{typeInfo.type.name}</Typography>
                    );
                  })}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon === false && <Typography>Pokemon not found.</Typography>}
      {pokemon !== undefined && pokemon && renderPokemonCard()}
    </>
  );
};

export default Pokemon;
