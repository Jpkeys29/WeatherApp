import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Heading, Spacer, Text, IconButton, Input, HStack } from "@chakra-ui/react";
import { wrap } from "framer-motion";

export default function SearchBar({ location, onChange }) {
    return (
        <Flex bg='#00b4d8' p={12} wrap={wrap} gap={2} h='10%' justify='center'>
            <Heading bg='white' color='teal' >
                <Text fontSize='50%'>The Weather Channel </Text>
            </Heading>
            <Input
                label='Search'
                value={location}
                onChange={onChange}
                bg="white"
                placeholder='Search City'
                _placeholder={{ textAlign: 'center' }}
                variant='filled'
                borderRadius='15px'
                color='white'
                width="30%"
            />
            <Button onClick={() => onChange} icon={<Search2Icon />}><IconButton icon={<Search2Icon/>} aria-label="Search"/></Button>
        </Flex>
    )
}