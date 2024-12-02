import React from 'react';
import {AuthScreenProps} from '@routes';
import {Box, Icon, Screen} from '@components';

export function LoginScreen({}: AuthScreenProps<'LoginScreen'>) {
  return (
    <Screen>
      <Box>
        <Icon name="arrow-back" />
      </Box>
    </Screen>
  );
}
