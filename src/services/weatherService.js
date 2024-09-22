/** @format */

// Fetch weather data from OpenWeatherMap
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
export const fetchWeather = async (city) => {
  // Construct the URL in the desired format
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Construct the URL with query parameters

  // console.log(`Fetching weather data from URL: ${url}`); // Log the URL for debugging
  // console.log(`API Key: ${apiKey}`);
  // console.log(`Fetching weather data from URL: ${url}`); // Log the URL for debugging

  try {
    const response = await fetch(url);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Function to fetch UV index based on latitude and longitude
export const fetchUVIndex = async (lat, lon) => {
  const uvApiUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(uvApiUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.value; // Returning UV index value
  } catch (error) {
    console.error('Error fetching UV index:', error);
    throw error;
  }
};

export const fetchWeatherData = async (city, country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data for ${city}, ${country}`);
    }

    const result = await response.json();
    return {
      city,
      country,
      temperature: result.main.temp,
      description: result.weather[0].description,
      icon: result.weather[0].icon,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Common function to fetch 5-day weather forecast data for a given city
export const fetchFiveDayForecast = async (city, country) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data for ${city}, ${country}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
