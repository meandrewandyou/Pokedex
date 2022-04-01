import {configureStore} from "@reduxjs/toolkit";
import pokemonSearchSlice from "./slices/pokemonSearch";
import userSlice from "./slices/userSlice";

// Looks like combineReducers is kinda deprecated. That's how we combine reducers via redux 
// toolkit nowdays.

const store = configureStore({
reducer: {
    pokemonSearch: pokemonSearchSlice,
    user: userSlice
}
});



export default store;