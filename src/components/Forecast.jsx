import { Box, Card, CardHeader, CardBody, CardFooter, Divider, Center, Container, Text } from "@chakra-ui/react";
import { WeatherDisplay } from "./APIs";

export const Forecast = ({location}) => {
    return (
        <Card bg='#00b4d8'textAlign='center' borderTop='8px'  borderColor='white' h='90vh'>
            <CardHeader fontSize='35px' color='white'>Weather in {location}</CardHeader>
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