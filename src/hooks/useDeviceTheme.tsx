import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface DataReturned {
  backgroundColor: string;
  contentColor: string;
  isDarkMode: boolean;
  barStyle: 'light-content' | 'dark-content';
}

const useDeviceTheme = (): DataReturned => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const contentColor = !isDarkMode ? Colors.darker : Colors.lighter;
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return {
    backgroundColor,
    contentColor,
    isDarkMode,
    barStyle,
  };
};

export default useDeviceTheme;
