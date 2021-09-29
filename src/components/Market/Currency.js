import React from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";

const Currency = ({
  image,
  name,
  capital,
  current,
  highest,
  lowest,
  lastUpdated,
  priceChangePercentage,
}) => {
  // console.log(name)

  let history = useHistory();

  const showCurrencyDetails = (name) => {
    const url = `/currency/${name}`;
    history.push(url);
  };

  return (
    <>
      <div className="currency-list">
        <div>
          <img src={image} alt="" />
        </div>
        <div>{name}</div>
        <div>$ {capital}</div>
        <div>${current}</div>
        <div>$ {highest}</div>
        <div> $ {lowest}</div>
        <div>{lastUpdated} </div>
        <div>
          {priceChangePercentage < 0 ? (
            <p className="red">{priceChangePercentage} %</p>
          ) : (
            <p className="green">{priceChangePercentage} %</p>
          )}{" "}
        </div>
        <div>
          <button
            className="goto-btn"
            onClick={() => showCurrencyDetails(name)}
          >
            Details
          </button>

          {/* <Link to={`/cryptoMarket/${name}`}>Details</Link> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Currency;
