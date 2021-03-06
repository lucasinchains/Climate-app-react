import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ data, setData, setQuery }) => {
  const [error, setError] = useState(false);

  const { city, country } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city === "" || country === "") {
      setError(true);
      return;
    }

    setError(false);

    setQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All fields are required" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City:</label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Select Country --</option>
          <option value="US">United States of America</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Search"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
