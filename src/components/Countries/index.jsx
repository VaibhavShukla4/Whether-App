/** @format */

import React, { useEffect, useState } from 'react';
import './index.css';
import { fetchWeatherData } from '../../services/weatherService';

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

const Countries = () => {
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
    <div className="highlight-card card-height overflow-auto">
      <span className="title">Popular Cities</span>
      {weatherData?.map((weather) => (
        <div key={weather.city} className="countries-card">
          <div className="state">
            <span className="name small-text">{weather.country}</span>
            <span className="name">{weather.city}</span>
            <span className="name small-text">{weather.description}</span>
          </div>
          <img
            className="condition"
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
          />
          <span className="name">{Math.round(weather.temperature)}°C</span>
        </div>
      ))}
    </div>
  );
};

export default Countries;
