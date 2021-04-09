import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed} from '../features/Feed';
import {Detail} from '../features/Detail/DetailScreen';
import {Settings} from '../features/Settings/SettingsScreen';
import {getTabBarIcon} from './tabBarIcon';

const Tab = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <Tab.Navigator initialRouteName={'Feed'}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, 'Feed', require('../assets/feed.png')),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, 'Details', require('../assets/details.png')),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) =>
            getTabBarIcon(
              focused,
              'Settings',
              require('../assets/settings.png'),
            ),
        }}
      />
    </Tab.Navigator>
  );
}
