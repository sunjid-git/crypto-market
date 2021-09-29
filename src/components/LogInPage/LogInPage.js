import React from "react";
import { Link } from "react-router-dom";
import "./LogInPage.css";
import google from "../../images/google-icon-logo-svgrepo-com.svg";

function LogInPage() {
  return (
    <div className="screen">
        <div className="get-details">
      <div className="login-form">
        <form action="">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="password"/>
          <input type="confirm" placeholder="confirm"/>
        </form>
      </div>
      <div>
        <Link className="log-in" to="/login">
          <img src={google} alt="" /> <strong>Sign In</strong>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default LogInPage;
