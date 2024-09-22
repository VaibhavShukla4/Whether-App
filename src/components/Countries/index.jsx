/** @format */

import React, { useEffect, useState } from 'react';
import './index.css';
import { fetchWeatherData } from '../../services/weatherService';
import CardSkeleton from '../CardSkeleton';

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
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch weather data for each city
  const fetchAllWeatherData = async () => {
    setLoading(true); // Start loading
    const data = await Promise.all(
      popularCities.map(async (cityObj) => {
        const result = await fetchWeatherData(cityObj.city, cityObj.country);
        return result;
      }),
    );
    setWeatherData(data.filter((item) => item !== null)); // Filter out any null results (error handling)
    setLoading(false); // Stop loading
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAllWeatherData();
  }, []);

  return (
    <div className="highlight-card card-height overflow-auto">
      <span className="title">Popular Cities</span>
      {loading ? ( // Show loading skeleton while data is fetching
        <>
          {/* Render multiple skeleton cards while loading */}
          <CardSkeleton />
        </>
      ) : (
        weatherData.map((weather) => (
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
        ))
      )}
    </div>
  );
};

export default Countries;
