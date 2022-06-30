import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";

export const homepage = () => {
  return (
    <Container className="home">
      <Box color="black" maxW="md">
        <FormControl isRequired>
          <FormLabel htmlFor="Username">User name</FormLabel>
          <Input type="text" id="Isername" placeholder="Username" />
          <FormLabel htmlFor="pswd">Password</FormLabel>
          <Input type="password" id="pswd" />
          <Button mt={4} colorScheme="teal" type="submit">
            Enter Chat room
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
