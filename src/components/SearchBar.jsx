import { Box, Flex, Text } from "@chakra-ui/react";

export default function SearchBar() {


    return (
        <Flex justify='center' alignItems='center' bg='#00b4d8' p={3}>
            <Text bg='#e5d8d8'>
                <input
                    placeholder="Search City or Zipcode"
                />
            </Text>
        </Flex>
    )
}