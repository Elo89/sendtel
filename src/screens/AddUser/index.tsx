import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Header from '../../components/Header/Header';

import useDeviceTheme from '../../hooks/useDeviceTheme';

const AddUser = () => {
  const {barStyle} = useDeviceTheme();

  return (
    <SafeAreaView>
      <StatusBar barStyle={barStyle} />
      <Header title="USER" />
      <View>
        <Text>Add User</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddUser;
