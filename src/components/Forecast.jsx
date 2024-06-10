import { Box, Card, CardHeader, CardBody, CardFooter, Divider, Center, Container, Text } from "@chakra-ui/react";

export default function () {
    return (
        <Card bg='#00b4d8'textAlign='center' borderTop='8px'  borderColor='white' h='90vh'>
            <CardHeader fontSize='40px' color='white'>Forecast</CardHeader>
            <CardBody>
                <Text fontSize='40px' color='white'></Text>
            </CardBody>
            <Divider borderColor='gray.200'></Divider>
            <CardFooter>
                <Text textColor='white'>Advertisement</Text>
            </CardFooter>
        </Card>
    )
}