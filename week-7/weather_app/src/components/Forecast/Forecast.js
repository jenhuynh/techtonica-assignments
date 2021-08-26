import { classes } from "istanbul-lib-coverage";
import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";

const Forecast = () => {
  //error handling: If the user doesn’t enter any characters into the input we do not want to fire off the request.
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  //useState city and unit will be dynamic values used in the URL query string to hold values in state on submit
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");

  //destructuring, creating responseObj variable and adding state so the function can change with setresponseObj by calling the useState function
  let [responseObj, setResponseObj] =
    //useState is an empty object because we expect the future value to be a JSON object
    useState({});
  //use preventDefault method and pass event 'e' object to ensure that when we refresh the page, we will not lose our state and information
  function getForecast(e) {
    e.preventDefault();
    //error handling: ends the function and sets error to true that triggers a message in the Conditions component and not fire off an empty request.
    if (city.length === 0) {
      return setError(true);
    }
    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});

    setLoading(true);
    //uriEncodedCity converts the input string
    let uriEncodedCity = encodeURIComponent(city);

    // fetching weather app data, url is a template string so we can use our variables with useState and able to access global weather data
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "3860cd684emsh35a6523e539ae0ep1f2907jsnd18f4f2c932d",
        },
      }
    )
      //converting the response into a JSON object, .then function is what happens after we get our data from the API
      .then((response) => response.json())
      // checks for an error and throws an error if the code on the response is not 200
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <h2>Check Current Weather Conditions</h2>
      {/* form allows user to  input a city and when button is clicked, the getForecast function is called from the onSubmit listener in the form element and users can search for cities.  */}
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            // Each change is stored and passed with the ‘e’ (event) argument.
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          {/* each input has a corresponding value from our state and updating that value with the corresponding function using the onChange event listener */}
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <div>
          <button type="submit">Get Forecast</button>
        </div>
      </form>
      {/* passing responseObj in Conditions component */}
      <Conditions responseObj={responseObj} error={error} loading={loading} />
    </div>
  );
};

export default Forecast;
