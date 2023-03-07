import React from "react";

import NavBar from "./commons/navbar";
import HomePage from "./components/home";
import Work from "./components/work";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App(){
  return(
    <>
      <NavBar />
      <HomePage />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default App;
