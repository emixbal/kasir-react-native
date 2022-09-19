import React from 'react';
import { Provider } from 'react-redux'

import {
  NativeBaseProvider,
} from 'native-base';

import store from './src/globalReducer';

import Home from './src/screens/Home'

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
