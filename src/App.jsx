import { useState } from 'react'
import Forecast from './components/Forecast'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { Box } from '@chakra-ui/react';
import useDebounce from './components/useDebounce';


function App() {
  const [location, setLocation] = useState('New York');

  function handleChange(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <SearchBar value={location} onChange={handleChange}/>
      <MainContent>
        <WeatherCard location={location}/>
      </MainContent>
    </>
  )
}

export default App
