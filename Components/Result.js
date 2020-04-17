import React from "react";
import PropTypes from "prop-types";

const Result = ({ weatherInfo }) => {
  const { name, main } = weatherInfo;

  const kelvinToCelsius = (temp) => {
    return parseFloat(temp - 273.15).toFixed(2);
  };

  if (!name) return null;

  return (
    <div className="card-panel white col s12">
      <div className="black-name">
        <h2>Weather in {name}:</h2>
        <p className="temperatura">
          {kelvinToCelsius(main.temp)} <span> &#x2103;</span>
        </p>
        <p>
          Min temp: {kelvinToCelsius(main.temp_min)} <span> &#x2103;</span>
        </p>
        <p>
          Max temp: {kelvinToCelsius(main.temp_max)} <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Result.propTypes = {
  weatherInfo: PropTypes.object.isRequired,
};

export default Result;
