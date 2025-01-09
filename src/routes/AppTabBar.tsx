import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxBlur,
  BoxBlurProps,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';

import {BlurView} from 'expo-blur';

import {AppTabBottomParamList} from './AppTabNavigator';
import {mapScreenToProps} from './mapScreenToProps';
import {Image, View, ViewStyle} from 'react-native';
import {$shadowProps} from '../theme';

export function AppTabBarA({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  const boxWrapper = $boxWrapperA(bottom);

  return (
    <BoxBlur
      tint="dark"
      intensity={85}
      {...boxWrapper}
      style={[{bottom, position: 'absolute'}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={index}
            {...$itemWrapper}
            hitSlop={10}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center'}}>
            {tabItem.label == 'Perfil' ? (
              <Box
                borderWidth={3}
                borderColor={isFocused ? 'primary' : 'backgroundContrast'}
                overflow="hidden"
                borderRadius="s24">
                <Image
                  source={{uri: 'https://loremfaces.net/96/id/2.jpg'}}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
              </Box>
            ) : (
              <Icon
                color={isFocused ? 'primary' : 'backgroundContrast'}
                name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              />
            )}
          </TouchableOpacityBox>
        );
      })}
    </BoxBlur>
  );
}

function $boxWrapperA(bottom: number): BoxBlurProps {
  return {
    paddingVertical: 's8',
    backgroundColor: 'background',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 's24',
    //position: 'absolute',
    //bottom,
    overflow: 'hidden',
  };
}

// const $label: TextProps = {
//   semiBold: true,
//   mt: 's4',
//   preset: 'paragraphCaption',
// };

// const $itemWrapper: TouchableOpacityBoxProps = {
//   activeOpacity: 1,
//   alignItems: 'center',
//   accessibilityRole: 'button',
// };

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'background',
  flexDirection: 'row',
};

const $label: TextProps = {
  semiBold: true,
  mt: 's4',
  preset: 'paragraphCaption',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};
