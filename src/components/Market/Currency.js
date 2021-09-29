import React from "react";

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
  return (
    <>
      <div className="currency-list">
        <div>
          <img src={image} alt="" />
        </div>
        <div>{name}</div>
        <div>{capital}</div>
        <div>{current}</div>
        <div>{highest}</div>
        <div> {lowest}</div>
        <div>{lastUpdated} </div>
        <div>
          {" "}
          {priceChangePercentage < 0 ? (
            <p className="red">{priceChangePercentage}</p>
          ) : (
            <p className="green">{priceChangePercentage}</p>
          )}{" "}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Currency;
