import { Box, Flex } from "@chakra-ui/react";

export default function MainContent({ children }) {
    return (
        <Box bg='#80daea'>
            <Flex justify="space-around"> 
                {children}
            </Flex>
        </Box>
    )
}