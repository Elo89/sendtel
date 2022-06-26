import {useTheme} from '@emotion/react';
import {ColorSchemeName, useColorScheme} from 'react-native';

interface DataReturned {
  backgroundColor: string;
  contentColor: string;
  deviceTheme: ColorSchemeName;
  isDarkMode: boolean;
  barStyle: 'light-content' | 'dark-content';
}

const useDeviceTheme = (): DataReturned => {
  const deviceTheme = useColorScheme() || 'light';
  const isDarkMode = deviceTheme === 'dark';
  const theme = useTheme();

  const backgroundColor = theme.colors?.[deviceTheme || 'light']?.background;
  const contentColor = theme.colors?.[deviceTheme || 'light']?.primary;
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return {
    backgroundColor,
    contentColor,
    isDarkMode,
    barStyle,
    deviceTheme,
  };
};

export default useDeviceTheme;
