import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {ChatScreen, GalleryScreen, HomeScreen, ProfileScreen} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomParamList = {
  HomeScreen: undefined;
  GalleryScreen: undefined;
  ChatScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="GalleryScreen" component={GalleryScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
