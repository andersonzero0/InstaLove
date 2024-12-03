import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Text} from '@components';
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
      <Tab.Screen name="HomeScreen" component={() => <Text>Home</Text>} />
      <Tab.Screen name="GalleryScreen" component={() => <Text>Gallery</Text>} />
      <Tab.Screen name="ChatScreen" component={() => <Text>Chat</Text>} />
      <Tab.Screen name="ProfileScreen" component={() => <Text>Profile</Text>} />
    </Tab.Navigator>
  );
}
