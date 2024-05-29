import React, { useState, useEffect } from 'react';

function WeatherDisplay() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const [location, setLocation] = useState(''); // Initial location (empty string)

  const [weatherData, setWeatherData] = useState(null); // State for weather data

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Check if location has a value before fetching data
        if (!location) {
          return; // Avoid unnecessary API calls if location is empty
        }

        const apiUrl = `https://www.meteosource.com/api/v1/free/point?sections=current%2Chourly&language=en&units=auto&location=${location}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle errors appropriately, e.g., display a user-friendly message
      }
    };

    fetchWeatherData();
  }, [location]); // Re-fetch data when location changes

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <h2>Weather for: {location}</h2>
      {/* Display weather data conditionally */}
      {weatherData && (
        // ... Render weather data using weatherData object (assuming data structure)
        <p>Current Temperature: {/* Extract and format temperature from data */}</p>
        {/* ... Render other weather information (precipitation, wind, etc.) */}
      )}
      <input type="text" value={location} onChange={handleLocationChange} />
      {/* Allow user to enter a new location */}
    </div>
  );
}

export default WeatherDisplay;
