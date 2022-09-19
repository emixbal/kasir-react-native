import React from 'react';

import {
  Link,
  Button,
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Box,
  FormControl, Input,
} from 'native-base';


const App = () => {
    return (
      <NativeBaseProvider
        theme={customTheme}
      >
        <Center
          px={4}
          flex={1}
        >  
          <Box
            safeArea p="2" py="8" w="90%" maxW="290"
          >
            <VStack>
              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
              }}>
                Welcome
              </Heading>
  
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input />
              </FormControl>
  
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
                <Link _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500"
                }} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
  
              <Button mt="2" colorScheme="indigo">
                Sign in
              </Button>
  
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>
                  I'm a new user.{" "}
                </Text>
                <Link
                  _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm"
                  }}
                >
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  };
  export default App;