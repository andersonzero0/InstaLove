import React from 'react';
import {AuthScreenProps} from '@routes';
import {Box, Button, Screen} from '@components';

export function LoginScreen({}: AuthScreenProps<'LoginScreen'>) {
  return (
    <Screen>
      <Box>
        <Button title="Entrar" />
      </Box>
    </Screen>
  );
}
