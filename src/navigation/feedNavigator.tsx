import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Feed} from '../features/Feed';
import {Detail} from '../features/Detail/DetailScreen';

const Stack = createStackNavigator();

export function FeedNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Feed'}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
