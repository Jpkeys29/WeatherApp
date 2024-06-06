// import Fetch from '../components/Fetch';
import { Box, Text, Center, Container, Heading, Card, CardHeader, CardBody, CardFooter, Divider } from '@chakra-ui/react';
import WeatherDisplay from './APIs';

export default function WeatherCard() {
    return (
        <Card bg='#00b4d8' textAlign='center' textColor='white' borderTop='8px' borderColor='white.300'>
            <CardHeader>
                <Text>Weather Today</Text>
            </CardHeader>
            <CardBody>
                <Text><WeatherDisplay /> </Text>
            </CardBody>
            <Divider borderColor='gray.200'></Divider>
            <CardFooter>
                <Text>Advertisement</Text>
            </CardFooter>
        </Card>
    )
}