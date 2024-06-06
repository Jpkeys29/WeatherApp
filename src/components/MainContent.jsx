import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { wrap } from "framer-motion";

export default function MainContent({ children }) {
    return (
        <SimpleGrid columns={2} spacing={5} p={10} bg='#80daea' height='950px'>
            {children}
        </SimpleGrid>
            // <Flex justify="space-around" '  p={6} wrap={wrap} gap={4}> 
            // </Flex>
    )
}