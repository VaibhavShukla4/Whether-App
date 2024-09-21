/** @format */

// Fetch weather data from OpenWeatherMap
export const fetchWeather = async (city) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // Construct the URL in the desired format
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Construct the URL with query parameters

  console.log(`Fetching weather data from URL: ${url}`); // Log the URL for debugging
  console.log(`API Key: ${apiKey}`);
  console.log(`Fetching weather data from URL: ${url}`); // Log the URL for debugging

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
