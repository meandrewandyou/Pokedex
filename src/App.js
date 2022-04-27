import React from "react";
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo"
import Masters from "./components/Masters";



function App() {
  
  return (<>
  <NavBar/>
  <Routes>
    <Route  path='/' element={<Pokedex/>}/>
    <Route  path='/:pokemonId' element={<Pokemon/>}/>
    <Route  path='/users/:user' element={<UserInfo/>}/>
    <Route path='/users/:user/favorites/' element={<Pokedex/>}/>
    <Route path='/masters' element={<Masters/>}/>


  </Routes>
  <Footer/>
  </>
    
  );
}

export default App;
