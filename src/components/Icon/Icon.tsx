import React from 'react';
import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';
import {Pressable} from 'react-native';
import IconVector from '@react-native-vector-icons/ionicons';

type IconName = 'arrow-back';

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 24,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <IconVector name={name} color={colors[color]} size={size} />;
      </Pressable>
    );
  }

  return <IconVector name="arrow-back" color="black" size={size} />;
}
