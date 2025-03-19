import { useState } from 'react';
import { Forecast } from './components/Forecast';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { Box } from '@chakra-ui/react';
import { useDebounce } from './components/Debounce';
import { WeatherDisplay } from './components/APIs';

export const App = () => {
  const [location, setLocation] = useState('New York');

  function handleChange(e) {
    setLocation(e.target.value);
  }

  const loadDataDebounced = useDebounce(WeatherDisplay, 400)
  
  return (
    <>
      <SearchBar
      value={location}
      // handleChange={handleChange}
      handleChange={loadDataDebounced}
      />
      <MainContent>
        <WeatherCard location={location}/>
      </MainContent>
    </>
  )
}

