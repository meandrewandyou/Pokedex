import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { CircularProgress, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import RenderCards from "./RenderCards";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// useStyles is CSS, but for MUI, to use directly in the component

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

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const { user } = params;

  // Setting up states for InfiniteScroll
  const [scrollData, setScrollData] = useState();
  const [hasMoreValue, setHasMoreValue] = useState(true);

  // That's the way to get searchInputValue outta redux
  const { searchInputValue } = useSelector((state) => state.pokemonSearch);

  const loggedUser = useSelector((state) => state.user.loggedUser);

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
      // I use setTimeout here to simulate server delay, so everyone can see this
      // beautiful LinearProgress)
      setTimeout(loadScrollData, 1000);
    } else {
      setHasMoreValue(false);
    }
  };

  const fetchPrimaryPokemonData = async () => {
    if (location.pathname === "/") {
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
    } else {
      if (loggedUser && loggedUser.username === user) {
        setPokemonData(loggedUser.favPokemons);
        setScrollData(loggedUser.favPokemons.slice(0, 8));
      } else {
        const response = await axios.get(
          `http://localhost:4000/user/findUser/${user}`
        );
        console.log(response.data);
        setPokemonData(response.data.favPokemons);
        setScrollData(response.data.favPokemons.slice(0, 8));
      }
    }
  };

  useEffect(() => {
    fetchPrimaryPokemonData();
    setHasMoreValue(true);
  }, [location]);

  return (
    <>
      {location.pathname !== "/" && (
        <div>
          <Typography>{`Those are the ${user}'s favorite pokemons`}</Typography>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </div>
      )}
      {/* Conditional rendering of cards depends on SearchInputValue. If it's empty, 
    we'll render scrollData, if not - we'll render matches from complete array of pokemons
    , which is pokemonData */}
      {searchInputValue ? (
        pokemonData ? (
          <>
            <Grid container spacing={4} className={classes.pokemonCardsArea}>
              {pokemonData.map(
                (pokemon, index) =>
                  pokemon.name.includes(searchInputValue) && (
                    <RenderCards
                      pokemonIndex={index}
                      pokemonData={pokemonData}
                    />
                  )
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
            loader={
              <LinearProgress
                color="warning"
                style={{ marginBottom: "25px" }}
              />
            }
            // Let's get rid of second scroll bar
            style={{ overflow: "unset" }}
          >
            <Grid container spacing={4} className={classes.pokemonCardsArea}>
              {scrollData.map((pokemon, index) => (
                <RenderCards pokemonData={pokemonData} pokemonIndex={index} />
              ))}
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
