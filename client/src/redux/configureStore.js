import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
import pokemonSearchSlice from "./slices/pokemonSearch";
import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";


const persistConfig = {
    key : "root",
    storage
}

// Cause I implemented redux-persist, I've got to combine reducers first
const reducers = combineReducers({
    pokemonSearch: pokemonSearchSlice,
    user: userSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)


// Some actions are ignored below. Idk why, but documentations tells to do so
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

const persistor = persistStore(store);



export {store, persistor};