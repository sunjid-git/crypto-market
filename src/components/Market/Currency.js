import React from "react";

const Currency = ({
  image,
  name,
  capital,
  current,
  highest,
  lowest,
  lastUpdated,
  priceChangePercentage
}) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">current</th>
            <th scope="col">highest</th>
            <th scope="col">lowest</th>
            <th scope="col">lastUpdated</th>
            <th scope="col">priceChangePercentage</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row"></th> */}
            <td>
                <img src={image} alt="" />
            </td>
            <td>{name}</td>
            <td>{capital}</td>
            <td>{current}</td>
            <td>{highest}</td>
            <td>{lowest}</td>
            <td>{lastUpdated}</td>
            <td>{priceChangePercentage}</td>
          </tr>

        </tbody>
      </table>

      <div></div>
    </div>
  );
};

export default Currency;
