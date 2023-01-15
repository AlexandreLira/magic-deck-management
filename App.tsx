/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/styles/theme';
import {

  StatusBar,

} from 'react-native';
import { store } from './src/store';
import { Provider } from 'react-redux';

function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <ThemeProvider theme={theme}>
        <StatusBar
          animated={true}
          backgroundColor={theme.colors.shape}
          barStyle='dark-content'
        />
        <Provider store={store}>

          <Routes />
        </Provider>

      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
