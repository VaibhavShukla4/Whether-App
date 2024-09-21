/** @format */

import React, { useState, useEffect } from 'react';
import { fetchWeather } from './../../services/weatherService';
import CitySearch from './../CitySearch/index';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather for the initial city (Delhi)
  useEffect(() => {
    handleCitySelect('Delhi'); // Initially show Delhi's weather
  }, []);

  const handleCitySelect = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setWeatherData(null);

      if (error.response && error.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('An error occurred. Please check your network connection.');
      }
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <CitySearch onCitySelect={handleCitySelect} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Search for a city to see the weather.</p>
      )}
    </div>
  );
};

export default React.memo(Weather);
