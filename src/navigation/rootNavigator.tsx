import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../features/Auth/LoginScreen';
import {HomeNavigator} from './homeNavigator';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAuth, User} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  );
}
