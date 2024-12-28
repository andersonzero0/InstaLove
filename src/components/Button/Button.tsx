import React from 'react';

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import {buttonPresets} from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title?: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  icon,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPresent =
    buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      {...buttonPresent.container}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPresent.content} />
      ) : (
        title && (
          <Text preset="paragraphMedium" bold color={buttonPresent.content}>
            {title}
          </Text>
        )
      )}
      {icon}
    </TouchableOpacityBox>
  );
}
