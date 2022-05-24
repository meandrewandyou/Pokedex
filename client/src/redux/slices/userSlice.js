import { createSlice } from "@reduxjs/toolkit"; 



const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedUser: null
    }
    ,
    reducers:{
        setUser: (state, action) => {state.loggedUser = action.payload}
    }
    
})


export const {setUser} = userSlice.actions;
export default userSlice.reducer;