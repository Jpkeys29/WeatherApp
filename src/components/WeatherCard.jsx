// import Fetch from '../components/Fetch';
import { Box, Text, Center, Container, Heading, Card, CardHeader, CardBody, CardFooter, Divider } from '@chakra-ui/react';
import { WeatherDisplay } from './APIs';

export const WeatherCard = ({location}) => {
    return (
        <Card bg='#00b4d8' borderTop='8px' borderColor='white' h='85vh' width="60%">
            {/* <CardHeader textAlign='center'>
                <Text fontSize='35px' color='white'>Today</Text>
            </CardHeader> */}
            <CardBody>
                <WeatherDisplay location={location}/>
            </CardBody>
            <Divider borderColor='gray.200'></Divider>
            <CardFooter>
                <Text textColor='white'>Advertisement</Text>
            </CardFooter>
        </Card>
    )
}