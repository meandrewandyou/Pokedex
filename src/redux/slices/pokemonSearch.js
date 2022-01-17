import { createSlice } from "@reduxjs/toolkit";



const pokemonSearchSlice = createSlice({
    name: "pokemonSearch",
    initialState: {
        searchInputValue: ""
    },
    reducers: {
setValue: (state, action) => {state.searchInputValue = action.payload;}
    }
}) ;



export const {setValue} = pokemonSearchSlice.actions;

export default pokemonSearchSlice.reducer;