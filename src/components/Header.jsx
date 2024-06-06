import { Box, Flex, Text, Heading, Container } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box>
            <Heading bg='#0077b6' color='white' p={5} textAlign='center'>The Weather</Heading>
        </Box>
    )
}

{/* <Box bg='#0077b6' p={5} >
            <Flex justify='center'>
                <Text color='white' fontSize='2rem'>
                    <h1>The Weather</h1>
                </Text>
            </Flex>
        // </Box> */}