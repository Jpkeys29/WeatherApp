import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { wrap } from "framer-motion";

export default function MainContent({ children }) {
    return (
        <SimpleGrid columns={2}  p={10} bg='#80daea' gap={10}>
            {children}
        </SimpleGrid>
    )
}