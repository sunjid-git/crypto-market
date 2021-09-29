import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Market from "./components/Market/Market";
import NoMatch from "./components/NoMatch/NoMatch";
import Contact from "./components/Contact/Contact";
import CurrencyDetails from "./components/Market/CurrencyDetails";
import LogInPage from "./components/LogInPage/LogInPage";

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

        <Route path="/contact">
          <Contact />
        </Route>CurrencyDetails

        <Route path="/currency/:id">
          <CurrencyDetails />
        </Route>

        <Route path="/login">
          <LogInPage />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
