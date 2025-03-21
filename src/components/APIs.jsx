import React, { useState, useEffect } from 'react';
import { Text, TableContainer, Table, Tbody, Td, Grid, Tr, Icon, Box, Divider } from '@chakra-ui/react';
import { FaBolt, FaSun, FaWind, FaWater, FaEye } from 'react-icons/fa';
import moment from 'moment';
import { Debounce } from './Debounce';

export const WeatherDisplay = ({ location, setLocation }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!location) {
          return; 
        }
        const apiUrl = (`http://api.weatherapi.com/v1/current.json?key= =${location}&aqi=no`);
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

  const dateData = weatherData.current?.last_updated;
  const dateTime = moment(dateData);
  const dayOfWeek = dateTime.format('dddd');
  const monthName = dateTime.format('MMMM');
  const dayNumber = dateTime.format('D');

  return (
    <Box>
      <Text textAlign="left" color='white' fontSize="25px" p={3}>{dayOfWeek} {monthName}  {dayNumber} </Text>
      <Divider borderColor='gray.200'></Divider>
      <Box p={5} paddingBottom={20}>
        <Text color='white' fontSize="35px" textAlign='center'>{weatherData.location?.name}</Text>
        <Text color='white' fontSize="65px" textAlign='center'>{weatherData.current?.feelslike_f}<sup>o</sup> </Text>
        <Text color='white' fontSize="25px" textAlign='center'>{weatherData.current?.condition.text} </Text>
      </Box>

      <TableContainer paddingTop={5}>
        <Table>
          <Tbody fontSize="20px">
            <Tr>
              <Grid templateColumns='repeat(2, 1fr)'>
                <Td><Icon as={FaBolt} /> Dew Point: {weatherData.current?.dewpoint_f}<sup>o</sup> </Td>
                <Td><Icon as={FaWater} /> Humidity: {weatherData.current?.humidity} %</Td>
                <Td>Pressure: {weatherData.current?.pressure_in} in</Td>
                <Td><Icon as={FaWind} />Wind:{weatherData && weatherData.current ? weatherData.current.wind_kph : null} mph</Td>
                <Td><Icon as={FaEye} /> Visibility: {weatherData.current?.vis_miles} miles</Td>
                <Td><Icon as={FaSun} />UV Index: {weatherData.current?.uv} </Td>
              </Grid>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* {weatherData && weatherData.location && weatherData.location.localtime} */}
      {/* <h3>{weatherData && weatherData.location ? weatherData.location.name : null}</h3> */}
      {/* <h2>{weatherData && weatherData.location && weatherData.location.name}</h2> */}
      {/* <h3>{weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</h3> */}
    </Box >
  );
}




