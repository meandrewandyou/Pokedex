import React, { useEffect, useState, useMemo } from "react";
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
import { setValue } from "../redux/slices/pokemonSearch";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  likeThePokemon,
  unlikeThePokemon,
  checkThePokemon,
} from "../constants/favPokActions";
import axios from "axios";

const useStyles = makeStyles({
  pokemonCard: {
    "&:hover": {
      transform: "scale3d(1.2, 1.2, 3)",
      transition: "all ",
    },
  },
  pokemonImage: {
    height: "160px",
    width: "160px",
  },

  pokemonPicture: {
    borderRadius: "50%",
    backgroundColor: "#F2F5C8",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

const RenderCards = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { pokemonData, pokemonIndex } = props;
  const { name, id, imgUrl } = pokemonData[pokemonIndex];
  const [mainType, setMainType] = useState();
  const [fav, setFav] = useState(false);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const favPokemon = useMemo(() => {
    return {
      name,
      id,
      imgUrl,
    };
  }, [id, name, imgUrl]);
  const dataToSend = {
    loggedUser,
    favPokemon,
    username: loggedUser && loggedUser.username,
  };

  useEffect(() => {
    // dispatch(setUser());
    checkThePokemon(loggedUser, favPokemon, setFav);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((result) => {
      setMainType(result.data.types[0].type.name);
    });
  }, [loggedUser, favPokemon, id]);

  return (
    <Grid key={pokemonIndex} item xs={12} sm={6} md={4} lg={3}>
      <Card
        elevation={20}
        style={{
          backgroundColor: colors[mainType],
          borderRadius: "25px 100px",
          transition: "all 500ms",
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
                navigate(`/${id}`);
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
                      likeThePokemon(
                        dataToSend,
                        loggedUser,
                        dispatch,
                        setUser,
                        setFav
                      );
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
                      unlikeThePokemon(
                        dataToSend,
                        loggedUser,
                        dispatch,
                        setUser,
                        setFav
                      );
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
