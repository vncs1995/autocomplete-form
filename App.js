/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
