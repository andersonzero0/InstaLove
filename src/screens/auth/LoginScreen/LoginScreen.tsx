import React from 'react';
import {AuthScreenProps} from '@routes';
import {Box, Button, Screen, TextInput} from '@components';

export function LoginScreen({}: AuthScreenProps<'LoginScreen'>) {
  return (
    <Screen>
      <Box gap="s16">
        <TextInput label="Email" placeholder="Ex.: seunome@email.com" />
        <TextInput label="Senha" placeholder="******" />
        <Button title="Entrar" />
      </Box>
    </Screen>
  );
}
