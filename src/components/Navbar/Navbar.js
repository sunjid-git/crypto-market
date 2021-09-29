import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import logo from '../../images/Crypto_cutout_logo.png';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar =()=>{
      setOpenLinks(!openLinks)
  }
    return (
      <div className="navbar">
      <div className="left-side" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="" /> 
        <div className="hidden-links">
          <Link to="/">Home</Link>
          <Link to="/cryptoMarket">Market</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/cryptoMarket">Market</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
    );
};

export default Navbar;