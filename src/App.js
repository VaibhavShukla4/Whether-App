/** @format */

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import LandingPage from './pages/LandingPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import Layout from './pages/Layout/index';
import './App.css';
import { fetchWeather } from './services/weatherService';
function App() {
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
  console.log(weatherData);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/"
        element={
          <Layout weatherData={weatherData} onCitySelect={handleCitySelect} />
        }
      >
        {/* <Route index element={<Home />} /> */}
        <Route path="home" element={<Home weatherData={weatherData} />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
