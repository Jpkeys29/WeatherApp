import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { wrap } from "framer-motion";

export const MainContent = ({ children }) => {
    return (
        <Box  p={17} bg='#80daea' justify='center' align="center">
            {children}
        </Box>
    )
}