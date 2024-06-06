import { useState } from 'react'
import Forecast from './components/Forecast'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { Box } from '@chakra-ui/react';

function App() {

  return (
    <>
      <SearchBar />
      <MainContent>
        <WeatherCard />
        <Forecast />
      </MainContent>
    </>
  )
}

export default App
