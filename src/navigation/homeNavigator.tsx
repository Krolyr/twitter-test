import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Settings} from '../features/Settings/SettingsScreen';
import {getTabBarIcon} from './tabBarIcon';
import {FeedNavigator} from './feedNavigator';

const Tab = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({focused}) =>
            getTabBarIcon(focused, 'Feed', require('../assets/feed.png')),
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
