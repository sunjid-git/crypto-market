import axios from "axios";
import "./Market.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Currency from "./Currency";

const Market = () => {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/").then((res) => {
      setCurrencies(res.data);
      //   console.log("API Calling data -",res.data);
    });
  }, []);

  const getCurrency = (e) => {
    setSearch(e.target.value);
  };
  //   console.log("Search Value - ",search);

  const filteredCurrency = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );
  // console.log("filteredCurrency Value - ", filteredCurrency);

  return (
    <div className="crypto-market">
      <div className="crypto-market-header">
        <h1>Get the latest crypto market values...</h1>

        <input
          type="text"
          placeholder="Get the currency status..."
          onChange={getCurrency}
          className="search-field"
        />
      </div>

      <div className="table-header">
        <div>#</div>
        <div>Name</div>
        <div>ID</div>
        <div>Capital</div>
        <div>Current</div>
        <div>Highest</div>
        <div>Lowest</div>
        <div>Last updated</div>
        <div>Price Change</div>
        <div>Get Details</div>
      </div>
      <hr />

      {filteredCurrency.map((currency) => (
        <Currency
          id={currency.id}
          key={currency.id}
          name={currency.name}
          image={currency.image.small}
          capital={currency.market_data.market_cap.aed}
          current={currency.market_data.current_price.aed}
          highest={currency.market_data.high_24h.aed}
          lowest={currency.market_data.low_24h.aed}
          lastUpdated={currency.last_updated}
          priceChangePercentage={
            currency.market_data.price_change_percentage_24h
          }
        ></Currency>
      ))}
    </div>
  );
};

export default Market;
