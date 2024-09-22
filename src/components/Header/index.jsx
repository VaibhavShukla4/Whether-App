/** @format */

import React, { useState, useEffect } from 'react';
import './index.css'; // Create a separate CSS file for header styles
import Search from './../../assets/svg/search.svg';
const Header = ({ isOpen, loading, onCitySelect, error, weatherData }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Hardcoded list of popular cities for suggestions (can be expanded or made dynamic)
  const cities = [
    'Mumbai',
    'Delhi',
    'New York',
    'London',
    'Tokyo',
    'Sydney',
    'Paris',
    'Toronto',
  ];
  const handleToggleSidebar = () => {};

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filteredCities);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleCitySelect = (city) => {
    setQuery(city);
    setShowDropdown(false);
    onCitySelect(city); // Callback to parent with selected city
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCitySelect(query);
      setShowDropdown(false);
    }
  };
  return (
    <header id={`${isOpen ? 'page-topbar' : 'page-topbar-hide'} `}>
      <div className="navbar-header">
        <div className="input-box">
          <img src={Search} alt="" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Listen for Enter key
            placeholder="Search Your location"
            className="search-input"
          />
        </div>
        {showDropdown && (
          <ul className="dropdown">
            {suggestions.length > 0 ? (
              suggestions.map((city, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="dropdown-item">No cities found</li>
            )}
          </ul>
        )}
        {/* {loading ? (
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
        )} */}
        <div className="d-flex header-right">
          <span>{/* <img src={Notifi} className="notification" /> */}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
