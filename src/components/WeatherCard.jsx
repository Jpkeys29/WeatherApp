// import Fetch from '../components/Fetch';
import { Box, Text } from '@chakra-ui/react';
import WeatherDisplay from './APIs';

export default function WeatherCard() {
    return (
        <Box bg='#00b4d8'>
            <Text color='white' fontSize='1.4rem'>
                <h3>Weather</h3>
                <WeatherDisplay />
            </Text>
        </Box>
    )
}