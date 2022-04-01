import { createSlice } from "@reduxjs/toolkit"; 



const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedUser: null,
        userAccessToken: null
    }
    ,
    reducers:{
        // We'll set user just to know the name, and we'll set token to make authorized 
        // requests to the backend server
        setUser: (state, action) => {state.loggedUser = action.payload},
        setToken: (state, action) => {state.userAccessToken = action.payload}
    }
    
})


export const {setUser, setToken} = userSlice.actions;
export default userSlice.reducer;