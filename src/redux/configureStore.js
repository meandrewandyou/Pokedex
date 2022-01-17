import {configureStore} from "@reduxjs/toolkit";
import pokemonSearchSlice from "./slices/pokemonSearch";

// Looks like combineReducers is kinda deprecated. That's how we combine reducers via redux 
// toolkit now.

const store = configureStore({
reducer: {
    pokemonSearch: pokemonSearchSlice
}
});



export default store;