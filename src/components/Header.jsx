import { Box, Flex, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box bg='#0077b6' p={5} >
            <Flex justify='center'>
                <Text color='white' fontSize='2rem'>
                    <h1>The Weather</h1>
                </Text>
            </Flex>
        </Box>
    )
}