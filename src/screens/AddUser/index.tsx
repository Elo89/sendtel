import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import useDeviceTheme from '../../hooks/useDeviceTheme';

const AddUser = () => {
  const {barStyle} = useDeviceTheme();

  return (
    <SafeAreaView>
      <StatusBar barStyle={barStyle} />
      <View>
        <Text>Add User</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddUser;
