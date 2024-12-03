import React from 'react';
import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';
import {Pressable} from 'react-native';
import IconVector from '@react-native-vector-icons/ionicons';
import {Box} from '../Box/Box';

export type IconName = Parameters<typeof IconVector>[0]['name'];

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
        <Box>
          <IconVector name={name} color={colors[color]} size={size} />
        </Box>
      </Pressable>
    );
  }

  return <IconVector name={name} color={colors[color]} size={size} />;
}
