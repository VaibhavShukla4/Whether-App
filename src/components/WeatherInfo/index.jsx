/** @format */

import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return <p>Loading weather data...</p>;
  }

  const { weather, main, name } = weatherData;
  const weatherDescription = weather[0].description;
  const weatherIcon = weather[0].icon;

  // Construct the URL for the weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="weather-info">
      <h1>Weather in {name}</h1>
      <p>
        <strong>Description:</strong> {weatherDescription}
      </p>
      {/* Display the weather icon */}
      <img src={iconUrl} alt={weatherDescription} />
      <p>
        <strong>Temperature:</strong> {main.temp}°C
      </p>
    </div>
  );
};

export default WeatherInfo;
