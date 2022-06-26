import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddRepo from '../screens/AddRepo';
import AddUser from '../screens/AddUser';
import {ScreenRoute} from './Screens';

const Stack = createNativeStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenRoute.HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenRoute.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenRoute.ADD_USER} component={AddUser} />
        <Stack.Screen name={ScreenRoute.ADD_REPO} component={AddRepo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
