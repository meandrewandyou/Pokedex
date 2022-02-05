import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  capitalize,
} from "@material-ui/core";
import { Button, CircularProgress, LinearProgress } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import colors from "../constatnts/colors";
import pokemonTypes from "../constatnts/pokemonTypes";
import { setValue } from "../redux/slices/pokemonSearch";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

// useStyles is CSS, but for MUI, to use directly in the component

const useStyles = makeStyles({
  pokemonCardsArea: {
    paddingTop: "30px",
    paddingLeft: "15%",
    paddingRight: "15%",
    width: "100%",
  },
  pokemonCard: {
    borderRadius: "25px 100px",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  pokemonImage: {
    height: "160px",
    width: "160px",
  },
  viewMoreButton: {
    marginTop: "10px",
  },
  progress: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-100px",
    marginLeft: "-100px",
  },
});

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();

  // Setting up states for InfiniteScroll
  const [scrollData, setScrollData] = useState();
  const [hasMoreValue, setHasMoreValue] = useState(true);

  // navigate is new history.push. Used to render components depending on routes in
  // react-router-dom v6.
  const navigate = useNavigate();

  // That's the way to get searchInputValue outta redux
  const { searchInputValue } = useSelector((state) => state.pokemonSearch);
  const dispatch = useDispatch();

  // When user is close enough to the bottom of the page, this function gonna be triggered
  // , new scrollData (data to be rendered) will be created
  const loadScrollData = async () => {
    try {
      setScrollData(pokemonData.slice(0, scrollData.length + 8));
    } catch (err) {
      console.log(err);
    }
  };

  // Handler function. Not only scrollData will be set up, but also hasMoreValue's value
  // Loader depends on it's value (show loader/ not show loader)
  const handleOnRowsScrollEnd = () => {
    if (scrollData.length < pokemonData.length) {
      setHasMoreValue(true);
      loadScrollData();
    } else {
      setHasMoreValue(false);
    }
  };

  const fetchPrimaryPokemonData = async () => {
    try {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=649")
        .then((response) => {
          const data = response.data.results;
          const newPokemonData = [];
          data.forEach((pokemon, index) => {
            newPokemonData.push({
              id: index + 1,
              name: pokemon.name,
              imgUrl: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
                index + 1
              }.svg`,
            });
          });
          setPokemonData(newPokemonData);
          // Let's set up primary array of items to render in InfiniteScroll
          setScrollData(newPokemonData.slice(0, 8));
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPrimaryPokemonData();
  }, []);

  const renderCards = (pokemonIndex) => {
    const { name, id, imgUrl } = pokemonData[pokemonIndex];
    const mainType = pokemonTypes[id].type;

    return (
      <Grid key={pokemonIndex} item xs={12} sm={6} md={4} lg={3}>
        <Card
          elevation={20}
          style={{ backgroundColor: colors[mainType] }}
          className={classes.pokemonCard}
        >
          <CardContent align="center">
            <Typography>{"Name: " + capitalize(`${name}`)}</Typography>
            <Typography>{`ID: ${id}`}</Typography>
            <CardMedia>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#F2F5C8",
                  maxWidth: "90%",
                }}
              >
                <img className={classes.pokemonImage} alt="" src={imgUrl} />
              </div>
            </CardMedia>
            <Typography>{`Main type: ${mainType}`}</Typography>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "pink",
                  color: "white",
                },
              }}
              className={classes.viewMoreButton}
              size="small"
              color="success"
              onClick={() => {
                navigate(`/${pokemonIndex + 1}`);
                // at this step searchInputValue got to be set to empty string, to render full
                // list of pokemons when user get back on the main page
                dispatch(setValue(""));
              }}
            >
              Show me more
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      {/* Conditional rendering of cards depends on SearchInputValue. If it's empty, 
    we'll render scrollData, if not - we'll render matches from complete array of pokemons
    , which is pokemonData */}
      {searchInputValue ? (
        pokemonData ? (
          <>
            <Grid container spacing={4} className={classes.pokemonCardsArea}>
              {pokemonData.map(
                (pokemon, index) =>
                  pokemon.name.includes(searchInputValue) && renderCards(index)
              )}
            </Grid>
          </>
        ) : (
          <CircularProgress
            color={"success"}
            className={classes.progress}
            size={200}
          />
        )
      ) : scrollData ? (
        <>
          <InfiniteScroll
            dataLength={scrollData.length}
            next={handleOnRowsScrollEnd}
            hasMore={hasMoreValue}
            scrollThreshold={1}
            loader={<LinearProgress />}
            // Let's get rid of second scroll bar
            style={{ overflow: "unset" }}
          >
            <Grid container spacing={4} className={classes.pokemonCardsArea}>
              {scrollData.map(
                (pokemon, index) =>
                  pokemon.name.includes(searchInputValue) && renderCards(index)
              )}
            </Grid>
          </InfiniteScroll>
        </>
      ) : (
        <CircularProgress
          color={"success"}
          className={classes.progress}
          size={200}
        />
      )}
    </>
  );
};

export default Pokedex;
