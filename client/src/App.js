import React from "react";
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo"
import Masters from "./components/Masters";
import MessageBoard from "./components/MessageBoard";
import { createTheme, ThemeProvider } from "@mui/material";
import NavButtons from "./components/NavButtons";
import axios from "axios";


function App() {

  axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:4000/" : "https://pokedex-for-everybody.herokuapp.com/";
  

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Macondo, cursive"
      ].join(",")
    }
  })

  return (<>
  <ThemeProvider theme={theme}>
  <NavBar/>
  <NavButtons/>
  <Routes>
    <Route  path='/' element={<Pokedex/>}/>
    <Route  path='/:pokemonId' element={<Pokemon/>}/>
    <Route  path='/users/:user' element={<UserInfo/>}/>
    <Route path='/users/:user/favorites/' element={<Pokedex/>}/>
    <Route path='/masters' element={<Masters/>}/>
    <Route path='/messageBoard' element={<MessageBoard/>}/>



  </Routes>
  <Footer/>
  </ThemeProvider>
  </>
    
  );
}

export default App;
