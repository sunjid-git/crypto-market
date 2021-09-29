import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Market from "./components/Market/Market";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/cryptoMarket">
          <Market />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
