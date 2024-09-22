/** @format */

import React, { useEffect, useState } from 'react';
import './index.css';
import { fetchFiveDayForecast } from '../../services/weatherService';
import { groupForecastByDay } from '../../utils/groupForecastByDay';
import ForecastCard from '../ForecastCard';
import CardSkeleton from '../CardSkeleton'; // Import the skeleton component

const popularCities = [
  { city: 'London', country: 'GB' },
  { city: 'New York', country: 'US' },
  { city: 'Tokyo', country: 'JP' },
  { city: 'Paris', country: 'FR' },
  { city: 'Sydney', country: 'AU' },
  { city: 'Dubai', country: 'AE' },
  { city: 'Mumbai', country: 'IN' },
];

const Forecast = () => {
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [cityIndex, setCityIndex] = useState(0); // Select first city by default

  const city = popularCities[cityIndex].city;
  const country = popularCities[cityIndex].country;

  // Fetch weather data for the selected city
  const fetchForecastData = async () => {
    setLoading(true); // Start loading before data fetch
    const result = await fetchFiveDayForecast(city, country);
    if (result) {
      const groupedData = groupForecastByDay(result.list);
      setForecastData(groupedData);
    }
    setLoading(false); // Stop loading after data is fetched
  };

  // Fetch data when the component mounts or city changes
  useEffect(() => {
    fetchForecastData();
  }, [city, country]);

  return (
    <div className="highlight-card card-height overflow-auto">
      <div className="top-heading">
        <span className="title">
          5 Day Forecast for <span style={{ color: 'red' }}>{city}</span>
        </span>
        {/* Render city selector */}
        <div className="city-selector">
          {popularCities.map((cityObj, index) => (
            <span
              className={index === cityIndex ? 'active' : ''}
              key={index}
              onClick={() => setCityIndex(index)}
            >
              {cityObj.city}
            </span>
          ))}
        </div>
      </div>

      {/* Conditional rendering based on loading state */}
      {loading ? (
        <>
          {/* Render multiple skeleton cards to simulate loading */}
          <CardSkeleton />
        </>
      ) : (
        forecastData && <ForecastCard forecastData={forecastData} />
      )}
    </div>
  );
};

export default Forecast;
