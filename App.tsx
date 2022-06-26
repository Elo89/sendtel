/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Routing from './src/Routing/Routing';
import {ThemeProvider} from '@emotion/react';
import ReusableProvider from './src/context/ReusableProvider';
import useGitRepoCheck from './src/hooks/useGitRepoCheck';
import {GitRepoCheckContext} from './src/context/contexts';

const theme = {
  light: {
    colors: {
      primary: 'black',
      background: 'white',
      error: 'red',
      success: 'green',
    },
  },
  dark: {
    colors: {
      primary: 'white',
      background: 'black',
      error: 'red',
      success: 'green',
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReusableProvider hook={useGitRepoCheck} Context={GitRepoCheckContext}>
        <Routing />
      </ReusableProvider>
    </ThemeProvider>
  );
}

export default App;
