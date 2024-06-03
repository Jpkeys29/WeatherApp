import { useState } from 'react'
import Forecast from './components/Forecast'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { Box } from '@chakra-ui/react';

function App() {
  
  return (
    <Box bg='#80daea'>
    <Header />
    <SearchBar />
    <MainContent>
      <WeatherCard />
      <Forecast />
    </MainContent>  
    </Box>
  )
}

export default App
