import { Box, Button, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { wrap } from "framer-motion";

export default function SearchBar() {
    return (
        <Flex bg='#00b4d8' p={12} wrap={wrap} gap={2}>
            <Heading>
                <Flex justify='flex-start'>
                    Logo
                </Flex>
            </Heading>
            <Flex justify="center" flexGrow={1} borderRadius='10px' bg="gray" w='30%'>
                <input
                    placeholder="Search City or Zipcode"
                />
                <Button>Search</Button>
            </Flex>
        </Flex>
    )
}