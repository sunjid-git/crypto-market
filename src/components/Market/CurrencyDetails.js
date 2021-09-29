import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";

import google from "../../images/google-icon-logo-svgrepo-com.svg";
import { Link } from "react-router-dom";

const CurrencyDetails = () => {
  const { id } = useParams();

  //   console.log('symbol - ',name )

  const [currencyDetails, setCurrencyDetails] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyDetails(data);
        console.log("hey- ", data);
      });
  }, [id]);

  console.log(currencyDetails);

  return (
    <div className="get-details">
      <div>
        <p>
          Want to know more about
          <p className="green" >  {currencyDetails.name}?</p>
        </p>
      </div>

      <Link className="log-in" to="/login">
        <img src={google} alt="" /> <strong>Sign In</strong>
      </Link>
    </div>
  );
};

export default CurrencyDetails;
