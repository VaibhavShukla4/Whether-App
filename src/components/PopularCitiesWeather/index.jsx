/** @format */

import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from './../../services/weatherService';

// List of popular cities
const popularCities = [
  { city: 'London', country: 'GB' },
  { city: 'New York', country: 'US' },
  { city: 'Tokyo', country: 'JP' },
  { city: 'Paris', country: 'FR' },
  { city: 'Sydney', country: 'AU' },
  { city: 'Dubai', country: 'AE' },
  { city: 'Mumbai', country: 'IN' },
];

const PopularCitiesWeather = () => {
  const [weatherData, setWeatherData] = useState([]);

  // Fetch weather data for each city
  const fetchAllWeatherData = async () => {
    const data = await Promise.all(
      popularCities.map(async (cityObj) => {
        const result = await fetchWeatherData(cityObj.city, cityObj.country);
        return result;
      }),
    );
    setWeatherData(data.filter((item) => item !== null)); // Filter out any null results (error handling)
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAllWeatherData();
  }, []);

  return (
    <div className="popular-cities-weather">
      <h1>Popular Cities Weather</h1>
      <div className="weather-list">
        {weatherData.map((weather) => (
          <div key={weather.city} className="weather-card">
            <h2>
              {weather.city}, {weather.country}
            </h2>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
            />
            <p>{weather.temperature}°C</p>
            <p>{weather.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(PopularCitiesWeather);
