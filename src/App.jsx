import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

// components
import Splash from "./components/Splash";
import About from "./components/About";
import PaperTraderProject from "./components/PaperTraderProject";
import PokedexProject from "./components/PokedexProject";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrap">
        <Splash />
        <PaperTraderProject />
        <PokedexProject />
      </div>
    </BrowserRouter>
  );
};

export default App;
