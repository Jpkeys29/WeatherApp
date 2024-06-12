import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

function WeatherDisplay({ location, setLocation }) {
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

  if (!weatherData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Text color='white' fontSize="35px" textAlign='center'>{weatherData.location?.name}</Text>
      <Text color='white' fontSize="60px" textAlign='center'>{weatherData.current?.feelslike_f}<sup>o</sup> </Text>
      <Text color='white' fontSize="25px" textAlign='center'>{weatherData.current?.condition.text} </Text>
      <Text>Dew Point: {weatherData.current?.dewpoint_f}<sup>o</sup> </Text>
      <Text>Humidity: {weatherData.current?.humidity} %</Text>
      <Text>Pressure: {weatherData.current?.pressure_in} in</Text>
      <Text>Wind:{weatherData && weatherData.current ? weatherData.current.wind_kph : null} mph</Text>
      <Text>Visibility: {weatherData.current?.vis_miles} miles</Text>
      <Text>UV Index: {weatherData.current?.uv} </Text>
      {weatherData && weatherData.location && weatherData.location.localtime}
      {/* <h3>{weatherData && weatherData.location ? weatherData.location.name : null}</h3> */}
      {/* <h2>{weatherData && weatherData.location && weatherData.location.name}</h2> */}
      {/* <h3>{weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</h3> */}
    </div>
  );
}

export default WeatherDisplay;
