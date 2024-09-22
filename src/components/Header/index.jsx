/** @format */

import React, { useState, useEffect } from 'react';
import './index.css'; // Create a separate CSS file for header styles
import Search from './../../assets/svg/search.svg';
import Theme from '../Theme/Index';
import { fetchCities } from './../../services/weatherService'; // Import the common function

const Header = ({ isOpen, loading, onCitySelect, isChecked, handleToggle }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [allCities, setAllCities] = useState([]);

  // Fetch the city names using the common function on component mount
  useEffect(() => {
    const loadCities = async () => {
      const cities = await fetchCities(); // Use the common function to fetch cities
      setAllCities(cities);
    };

    loadCities();
  }, []); // Run only once when the component is mounted

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredCities = allCities.filter((city) =>
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
      handleCitySelect(query);
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
            onFocus={() => setShowDropdown(true)} // Show dropdown on focus
          />
        </div>
        <div className="small-device-theme">
          <Theme handleToggle={handleToggle} isChecked={isChecked} />
        </div>
        {showDropdown && suggestions.length > 0 && (
          <ul className="dropdown">
            {suggestions.map((city, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
