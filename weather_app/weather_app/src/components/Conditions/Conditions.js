import React from "react";

//adding a ternary Javascript operator to display the data only when the HTTP response code aka cod is 200.
//404 code displays if we do not enter valid city in query parameter
//400 code if no city was entered
const Conditions = (props) => {
  return (
    <div>
      {/* Checks for errors. We look up a city without entering a name the error message will appear, and while we wait for the response from the API we will see an element informing us that data is loading. */}
      {props.error && <small>Please enter a valid city.</small>}
      {props.loading && <div>Loading...</div>}
      {/* accesing data from responseObj inside props object */}
      {props.responseObj.cod === "200" ? (
        <div>
          <p>{/* <strong>{props.responseObj.city.name}</strong> */}</p>
          <p>
            {/* It is currently {Math.round(props.responseObj.list[0].main.temp)}{" "}
            degrees out with {props.responseObj.list[0].weather[0].description}. */}
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default Conditions;
