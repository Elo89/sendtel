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

export const ReusableContext = React.createContext<any | {}>({});

const theme = {
  colors: {
    primary: 'black',
    secondary: 'white',
    error: 'red',
    success: 'green',
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
