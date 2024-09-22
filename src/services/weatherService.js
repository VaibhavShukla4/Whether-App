/** @format */

// Fetch weather data from OpenWeatherMap
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
// Function to fetch weather data for a specific city
export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null; // Return null to avoid breaking the loop in case of error
  }
};

// Function to fetch weather data for multiple cities
export const fetchWeatherForCities = async (cities) => {
  const weatherData = [];

  for (const city of cities) {
    try {
      const data = await fetchWeather(city);
      if (data) {
        weatherData.push({ city, data });
      } else {
        console.log(`Failed to fetch data for ${city}`);
      }
    } catch (error) {
      console.error(`Error fetching weather data for ${city}:`, error);
    }
  }

  return weatherData;
};

// Example usage: list of popular and non-popular cities
const cities = ['New York', 'Paris', 'Tokyo', 'Delhi', 'SmallTown']; // Add more cities as needed

fetchWeatherForCities(cities).then((result) => {
  console.log('Weather data for cities:', result);
});

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

export const fetchCities = async () => {
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/population/cities',
    );
    const data = await response.json();
    if (data.error) {
      throw new Error('Error fetching city data');
    }
    return data.data.map((city) => city.city);
  } catch (error) {
    console.error('Error fetching city names:', error);
    return []; // Return an empty array if there's an error
  }
};
