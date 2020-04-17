import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Result from "./Components/Result";
import Error from "./Components/Error";

function App() {
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);

  const [weatherInfo, setWheatherInfo] = useState({});

  const [error, setError] = useState(false);

  const { city, country } = data;

  useEffect(() => {
    const consultApi = async () => {
      if (query) {
        const apiId = "59bb83495bc83e059cbe854dc21374b9";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

        const response = await fetch(url);
        const result = await response.json();
        setQuery(false);
        setWheatherInfo(result);

        if (result.cod === "404") {
          setError(true);
          return;
        }
        setError(false);
      }
    };
    consultApi();
    // eslint-disable-next-line
  }, [query]);

  const conditionalComponent = error ? (
    <Error message="No results found for that city" />
  ) : (
    <Result weatherInfo={weatherInfo} />
  );

  return (
    <Fragment>
      <Header title="Climate App - Consult weather anywhere!" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{conditionalComponent}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
