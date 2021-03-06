import React, { useState } from "react";
import Conditions from "../displays/Conditions/Conditions";
import classes from './Forecast.module.css';

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial"); //default initial temperature unit
  const uriEncodedCity = encodeURIComponent(city);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [responseObj, setResponseObj] = useState({});
  function getForecast(e) {
    //keeps event state
    e.preventDefault();
    if(city.length === 0) {
        return setError(true);
    }

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "03d14b788emsh832efa191bf65f6p12da52jsnd28990858710",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
          if(response.cod !== 200) {
              throw new Error()
          }
        setResponseObj(response);
        setLoading(false);
      }).catch (err => {
          setError(true);
          setLoading(false);
          console.log(err.message);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button className={classes.Button} type="submit">Get Forecast</button>
      </form>
      <Conditions 
        responseObj={responseObj} 
        error={error}
        loading={loading} 
        />
    </div>
  );
};

export default Forecast;
