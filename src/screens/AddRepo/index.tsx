import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import useDeviceTheme from '../../hooks/useDeviceTheme';

const AddRepo = () => {
  const {barStyle} = useDeviceTheme();

  return (
    <SafeAreaView>
      <StatusBar barStyle={barStyle} />
      <View>
        <Text>Add Repo</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddRepo;
