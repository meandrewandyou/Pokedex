import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  capitalize,
  Button,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import colors from "../constants/colors";
import pokemonTypes from "../constants/pokemonTypes";
import { setValue } from "../redux/slices/pokemonSearch";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles({
  pokemonCardsArea: {
    paddingTop: "30px",
    paddingLeft: "15%",
    paddingRight: "15%",
    width: "100%",
  },
  pokemonCard: {
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  pokemonImage: {
    height: "160px",
    width: "160px",
  },
  extrasDiv: {
    marginTop: "10px",
  },
  progress: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-100px",
    marginLeft: "-100px",
  },
  pokemonPicture: {
    borderRadius: "50%",
    backgroundColor: "#F2F5C8",
    maxWidth: "90%",
  },
});

const RenderCards = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { pokemonData, pokemonIndex } = props;
  const { name, id, imgUrl } = pokemonData[pokemonIndex];
  const mainType = pokemonTypes[id].type;
  const [fav, setFav] = useState(false);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const favPokemon = {
    name,
    id,
    imgUrl,
  };
  const dataToSend = {
    loggedUser,
    favPokemon,
  };

  const likeThePokemon = () => {
    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };
    axios
      .post(`http://localhost:4000/user/like`, dataToSend, {
        headers: headers,
      })
      .then((response) => {
        dispatch(setUser({ ...loggedUser, favPokemons: response.data }));
        console.log(response.data);
      });
  };

  const unlikeThePokemon = () => {
    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };
    axios
      .post(`http://localhost:4000/user/unlike`, dataToSend, {
        headers: headers,
      })
      .then((response) => {
        dispatch(setUser({ ...loggedUser, favPokemons: response.data }));
        console.log(response.data);
      });
  };

  useEffect(() => {
    if (loggedUser) {
      const foundFav = loggedUser.favPokemons.find(
        (pokemon) => pokemon.name === favPokemon.name
      );
      foundFav ? setFav(true) : setFav(false);
    }
  }, [loggedUser, favPokemon.name]);

  return (
    <Grid key={pokemonIndex} item xs={12} sm={6} md={4} lg={3}>
      <Card
        elevation={20}
        style={{
          backgroundColor: colors[mainType],
          borderRadius: "25px 100px",
        }}
        className={classes.pokemonCard}
      >
        <CardContent align="center">
          <Typography>{"Name: " + capitalize(`${name}`)}</Typography>
          <Typography>{`ID: ${id}`}</Typography>
          <CardMedia>
            <div className={classes.pokemonPicture}>
              <img className={classes.pokemonImage} alt="" src={imgUrl} />
            </div>
          </CardMedia>
          <Typography>{`Main type: ${mainType}`}</Typography>
          <div className={classes.extrasDiv}>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "pink",
                  color: "white",
                },
              }}
              size="small"
              color="success"
              onClick={() => {
                navigate(`/${pokemonIndex + 1}`);
                // at this step searchInputValue got to be set to empty string, to render full
                // list of pokemons when user get back on the main page
                dispatch(setValue(""));
              }}
            >
              More
            </Button>

            {loggedUser ? (
              !fav ? (
                <Tooltip arrow title="Add to favorites">
                  <Button
                    onClick={() => {
                      likeThePokemon();
                      setFav(!fav);
                    }}
                  >
                    <FavoriteBorder
                      sx={{
                        ":hover": {
                          color: "red",
                        },
                      }}
                    />
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip arrow title="Remove from favorites">
                  <Button
                    onClick={() => {
                      unlikeThePokemon();
                      setFav(!fav);
                    }}
                  >
                    <Favorite color="error" />
                  </Button>
                </Tooltip>
              )
            ) : null}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RenderCards;
