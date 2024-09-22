<!-- @format -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Weather Forecast Application
A web-based weather forecast application that provides detailed weather conditions for cities around the world. Users can search for any city to get current weather conditions such as temperature, wind status, humidity, visibility, sunrise/sunset times, and a 5-day weather forecast. The app also provides a list of popular cities for quick weather lookups.

Features
Search Functionality: Search for weather information by city name.
Current Weather: Displays detailed current weather conditions including temperature, wind speed, UV index, visibility, humidity, and more.
Popular Cities: Predefined popular cities section allows quick weather lookups.
5-Day Forecast: Shows a 5-day weather forecast for the selected city.
Unit Conversion: Toggle between Fahrenheit and Celsius.
Theme Support: Light/Dark theme toggle.
Technologies Used
React.js: The frontend is built using React for fast and efficient UI rendering.
OpenWeather API: Used to fetch real-time weather data for cities.
CSS: Custom styling for the UI layout and weather cards.

Technologies Used
React.js: For building the user interface and managing state.
CSS: For styling the app.
react-router-dom: For managing routing and navigation between components.

Installation
Prerequisites
Node.js (v14 or later)
npm (Node Package Manager) or yarn

Steps to Set Up Locally

1. Clone the repository:

git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Install dependencies:
   npm install
   or if you're using yarn:
   yarn install
3. Set up your environment variables: Create a .env file in the root of your project and add your API key from OpenWeather:
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key

4. Start the application:
   npm start
   or with yarn:
   yarn start

5. Access the app: Once the project is running, open your browser and go to http://localhost:3000 to view the app.

Assumptions Made During Development
The app fetches data from the OpenWeather API, and it assumes that the API is available and functional.
The application assumes that the city names entered are spelled correctly and exist in the OpenWeather API database.
The 5-day weather forecast is shown based on the data provided by OpenWeather, which may sometimes be in 3-hour intervals.
How to Use the Application
Search for a city: Enter the name of the city in the search bar at the top. The app will fetch and display the current weather information for that city.
Popular Cities: You can click on any of the predefined popular cities listed below the search bar to instantly get weather updates.
View the forecast: Once you search or select a city, the app will display the current weather and a 5-day forecast.
Toggle temperature units: Use the unit toggle (Fahrenheit/Celsius) next to the temperature to switch between units.
Dark Mode: Use the theme toggle on the left sidebar to switch between light and dark modes.
API Reference
OpenWeather API: The application uses the OpenWeather API to fetch weather data. You will need an API key to access the weather data. Sign up for a free API key here.
Future Enhancements
Geolocation: Add the ability for users to allow the app to detect their location and automatically display the weather.
Hourly Forecast: Display more granular weather data, such as hourly updates for the current day.
Error Handling: Improve the handling of invalid city searches or API errors.

Also i have use countriesnow for cities dropdown suggestion
