import React from "react";

const WeatherCard = (props) => {
  const toDate = (datestring) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return new Date(datestring).toLocaleDateString("en", options);
    //add locale date time string
  };
  // return new Date(datestring).toLocaleDateString("en", options);

  return (
    <div>
      {props.responseObj.cod === "200" ? (
        <div className="weatherCard">
          <p>
            <strong>{props.responseObj.city.name}</strong>
          </p>
          <p>
            {/* // getting date */}
            {toDate(props.responseObj.list[props.index].dt_txt)}
          </p>
          <p>
            {/* // temp of day */}
            {Math.round(props.responseObj.list[props.index].main.temp)}
          </p>
          <p>
            {/* // weather icon */}
            <img
              src={`http://openweathermap.org/img/wn/${
                props.responseObj.list[props.index].weather[0].icon
              }@2x.png`}
            ></img>
          </p>
          <p>
            {/* //description of weather */}
            {Math.round(props.responseObj.list[props.index].main.temp)} degrees
            out with{" "}
            {props.responseObj.list[props.index].weather[0].description}
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherCard;
