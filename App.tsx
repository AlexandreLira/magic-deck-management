/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/styles/theme';
import {

  StatusBar,

} from 'react-native';

function App(): JSX.Element {
  
  return( 
    <ThemeProvider theme={theme}>
       <StatusBar
        animated={true}
        backgroundColor={theme.colors.shape}
        barStyle='dark-content'
      />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
