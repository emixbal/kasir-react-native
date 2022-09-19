import React from 'react';

import {
  Text, Box, Button, Alert
} from 'native-base';


const Home = (props) => {
  console.log(props.isLoading);
    return (
      <Box>
        <Text>
          This is home
        </Text>
        <Button>Klik aku</Button>
      </Box>
    );
  };
  export default Home;