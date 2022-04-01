import React from "react";
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo"




function App() {
  
  return (<>
  <NavBar/>
  <Routes>
    <Route  path='/' element={<Pokedex/>}/>
    <Route  path='/:pokemonId' element={<Pokemon/>}/>
    <Route  path='/users/:user' element={<UserInfo/>}/>

  </Routes>
  <Footer/>
  </>
    
  );
}

export default App;
