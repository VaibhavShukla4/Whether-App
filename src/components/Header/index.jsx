/** @format */

import React, { useState, useEffect } from 'react';
import './index.css'; // Create a separate CSS file for header styles
import Search from './../../assets/svg/search.svg';
import Theme from '../Theme/Index';
const Header = ({ isOpen, loading, onCitySelect, isChecked, handleToggle }) => {
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
        <div className="small-device-theme">
          <Theme handleToggle={handleToggle} isChecked={isChecked} />
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
      </div>
    </header>
  );
};

export default Header;
