import { useState } from 'react'
import Forecast from './components/Forecast'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { Box } from '@chakra-ui/react';

function App() {
  const [location, setLocation] = useState('New York');

  function handleChange(e) {
    if (e.keyCode === 13 ) {
      setLocation(e.target.value);
    } 
  }
  
  return (
    <>
      <SearchBar value={location} handleChange={handleChange}/>
      <MainContent>
        <WeatherCard location={location}/>
      </MainContent>
    </>
  )
}

export default App
