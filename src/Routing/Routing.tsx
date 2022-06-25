import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddRepo from '../screens/AddRepo';
import AddUser from '../screens/AddUser';

const Stack = createNativeStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="AddRepo" component={AddRepo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
