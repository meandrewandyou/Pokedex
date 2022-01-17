import React from "react";
import Pokemon from "./components/Pokemon";
import Pokedex from "./components/Pokedex";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";




function App() {
  
  return (<>
  <NavBar/>
  <Routes>
    <Route  path='/' element={<Pokedex/>}/>
    <Route  path='/:pokemonId' element={<Pokemon/>}/>

  </Routes>
  
  </>
    
  );
}

export default App;
