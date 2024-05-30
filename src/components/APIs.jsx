import React, { useState, useEffect } from 'react';

function WeatherDisplay() {
  const [location, setLocation] = useState('Miami');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Check if location has a value before fetching data
        if (!location) {
          return; // Avoid unnecessary API calls if location is empty
        }
        const apiUrl = (`http://api.weatherapi.com/v1/current.json?key=3da3dfd986734b34884171856242405&q=${location}&aqi=no`);
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

  return (
    <div>
      {/* <h2>{weatherData.location?.name}</h2> */}
      {/* <h2>{weatherData && weatherData.location && weatherData.location.name}</h2>
      <h3>{weatherData && weatherData.location ? weatherData.location.name : null}</h3>
      <h1>{weatherData.current?.feelslike_f} </h1> */}
      {/* <h2>{weatherData.current?.condition.text} </h2> */}
      <h3>{weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</h3>
    </div>
  );
}

export default WeatherDisplay;
