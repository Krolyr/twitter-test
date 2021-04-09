import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../features/Auth/LoginScreen';
import {HomeNavigator} from './homeNavigator';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name={'Home'} component={HomeNavigator} />
    </Stack.Navigator>
  );
}
