import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import useDeviceTheme from '../hooks/useDeviceTheme';

const HomeScreen = () => {
  const {barStyle} = useDeviceTheme();

  return (
    <SafeAreaView>
      <StatusBar barStyle={barStyle} />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
