import React, { Component } from "react";
import "./App.css";
import banner from "./assets/banner.jpeg";
import Banner from "./components/header/header";
import Home from "./components/home/home"; 

import { SecretNetworkClient } from "secretjs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quests from "./components/quests/quests";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "TraceX Analysis",
      titleSn: "",
      titleConnector: "",
      user: null,
    }; 
  }
 
  render() { 
    const bgStyle = {
      backgroundImage: `linear-gradient(rgba(58, 58, 58, 0.1), rgba(58, 58, 58, 1)), url(${banner})`,
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "500px",
      position: "absolute"
    };
    return (
      <div className="root" style={bgStyle}>
        <div className="content-area"> 
        <Router>
        <Banner></Banner>
          <Routes> 
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path="/quests" element={< Quests />} />
          </Routes>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
