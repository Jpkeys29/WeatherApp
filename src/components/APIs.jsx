import React, { useState, useEffect } from 'react';

function WeatherDisplay() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Check if location has a value before fetching data
        if (!location) {
          return; // Avoid unnecessary API calls if location is empty
        }
        // const apiUrl = (`http://api.weatherapi.com/v1/current.json?key=3da3dfd986734b34884171856242405&q=${location}&aqi=no`);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data); //updates weatherData with the fetch weather data
        console.log(data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [location]); // Re-fetch data when location changes

  // const handleLocationChange = (event) => {
  //   setLocation(event.target.value);
  // };

  return (
    <div>
      <h2>Weather for: {weatherData.location?.name}</h2>
      {/* Display weather data conditionally */}
      {/* {weatherData && ( */}
        {/* // ... Render weather data using weatherData object (assuming data structure) */}
        {/* // <p>Current Temperature: Extract and format temperature from data</p> */}
        {/* ... Render other weather information (precipitation, wind, etc.) */}
      {/* <input type="text" value={location} onChange={handleLocationChange} /> */}
      {/* Allow user to enter a new location */}
    </div>
  );
}

export default WeatherDisplay;
