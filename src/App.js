import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Staff from "./Components/Staff";
import Students from "./Components/Students";
import './Index.css';

function App() {
  const [wizards, setWizards] = useState([]);

  const getMyWizard = async () => {
    const response = await fetch("http://hp-api.herokuapp.com/api/characters");
    const resData = await response.json();

    setWizards(resData);
  };
  useEffect(() => {
    getMyWizard();
  }, []);
  return (
    <div className="App">
      <Navbar />
      
      <Route exact path="/" render={() => <Home wizards={wizards} />}></Route>
      <Route   render={() => <Students wizards={wizards} />} exact path="/Students" />
      <Route   render={() => <Staff wizards={wizards} />} exact path="/Staff" />
    </div>
  );
}

export default App;
