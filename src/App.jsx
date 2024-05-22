import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import MainContent from './components/MainContent'
import Forecast from './components/Forecast'

function App() {
  
  return (
    <>
    <Header />
    <SearchBar />
    <MainContent>
      <WeatherCard />
      <Forecast />
    </MainContent>
      
    </>
  )
}

export default App
