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
import {
  GitRepoCheckContext,
  TelegramSenderContext,
} from './src/context/contexts';
import useTelegramSender from './src/hooks/useTelegramSender';
import useDeviceTheme from './src/hooks/useDeviceTheme';
import {CustomView} from './src/Theme/styled';

const theme = {
  colors: {
    light: {
      primary: '#000',
      background: '#fff',
      error: '#F3AFAE',
      success: '#D4FEDD',
      disaled: '#989898',
    },
    dark: {
      primary: '#fff',
      background: '#000',
      error: '#A85661',
      success: '#76A653',
      disaled: '#989898',
    },
  },
};

function App() {
  const {backgroundColor} = useDeviceTheme();
  return (
    <ThemeProvider theme={theme}>
      <ReusableProvider hook={useGitRepoCheck} Context={GitRepoCheckContext}>
        <ReusableProvider
          hook={useTelegramSender}
          Context={TelegramSenderContext}>
          <CustomView flex={1} backgroundColor={backgroundColor}>
            <Routing />
          </CustomView>
        </ReusableProvider>
      </ReusableProvider>
    </ThemeProvider>
  );
}

export default App;
