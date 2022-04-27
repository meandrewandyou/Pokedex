import {
  capitalize,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import colors from "../constants/colors";
const useStyles = makeStyles({
  pokemonCard: {
    width: "450px",
    marginTop: "3em",
  },
  progress: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-100px",
    marginLeft: "-100px",
  },
});

const Pokemon = () => {
  const params = useParams();
  // We can get params value in any component, nested in <Routes></Routes>. Just like this.
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);
  const navigate = useNavigate();
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
    const mainType = types[0].type.name;
    const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
    const logoUrl =
      sprites.versions["generation-v"]["black-white"].animated.front_default;

    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={6}>
            <Card
              className={classes.pokemonCard}
              style={{
                backgroundColor: colors[mainType],
                borderRadius: "25px 100px",
              }}
            >
              <CardContent align="center">
                <Typography align="center" variant="h2">
                  {capitalize(name)} <img src={logoUrl} alt="" />
                </Typography>
                <CardMedia allign="center">
                  <img
                    style={{ width: "260px", height: "260px" }}
                    src={imageUrl}
                    alt=""
                  />
                </CardMedia>
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
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navigate("/")}
                >
                  Return to main page
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && (
        <CircularProgress
          color={"success"}
          className={classes.progress}
          size={200}
        />
      )}
      {pokemon === false && <Typography>Pokemon not found.</Typography>}
      {pokemon !== undefined && pokemon && renderPokemonCard()}
    </>
  );
};

export default Pokemon;
