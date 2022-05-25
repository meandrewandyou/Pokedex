import axios from "axios";

// Cause I have more the one component where I need likes, like/unlike functions now are in
// the separate file. I can't use redux stuff out of React components, so there're lot of
// parameters here and in components that use this functions. Kinda ugly, but still better
// than copy/paste functions in each component

const likeThePokemon = (dataToSend, loggedUser, dispatch, setUser, setFav ) => {


    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };
    axios
      .post(`user/like`, dataToSend, {
        headers: headers,
      })
      .then((response) => {
        setFav(true)
        dispatch(setUser({ ...loggedUser, favPokemons: response.data.newFavPokemons, accessToken: response.data.newToken }));
      }).catch((err)=>{window.alert(err.response.data);});
  };

  const unlikeThePokemon = (dataToSend, loggedUser, dispatch, setUser, setFav ) => {

    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };
    axios
      .post(`user/unlike`, dataToSend, {
        headers: headers,
      })
      .then((response) => {
        setFav(true)
        dispatch(setUser({ ...loggedUser, favPokemons: response.data.newFavPokemons, accessToken: response.data.newToken }));
      }).catch((err)=>{window.alert(err.response.data);});
  };

  const checkThePokemon = (loggedUser, favPokemon, setFav)=>{
    if (loggedUser) {
      const foundFav = loggedUser.favPokemons.find(
        (pokemon) => pokemon.name === favPokemon.name
      );
      foundFav ? setFav(true) : setFav(false);
    }
  }

  export {likeThePokemon, unlikeThePokemon, checkThePokemon};