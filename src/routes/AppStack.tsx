import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {AppTabBottomParamList, AppTabNavigator} from './AppTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Stack.Navigator>
  );
}
