// import Fetch from '../components/Fetch';
import { Box, Text, Center, Container, Heading, Card, CardHeader, CardBody, CardFooter, Divider } from '@chakra-ui/react';
import WeatherDisplay from './APIs';

export default function WeatherCard() {
    return (
        <Card bg='#00b4d8' borderTop='8px' borderColor='white' h='90vh'>
            <CardHeader textAlign='center'>
                <Text fontSize='40px' color='white'>Today</Text>
            </CardHeader>
            <CardBody>
                <Text color="white" ><WeatherDisplay /> </Text>
            </CardBody>
            <Divider borderColor='gray.200'></Divider>
            <CardFooter>
                <Text textColor='white'>Advertisement</Text>
            </CardFooter>
        </Card>
    )
}