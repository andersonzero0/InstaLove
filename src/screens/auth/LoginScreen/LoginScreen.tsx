import React from 'react';
import {AuthScreenProps} from '@routes';
import {Box, Button, Icon, PasswordInput, Screen, TextInput} from '@components';

export function LoginScreen({}: AuthScreenProps<'LoginScreen'>) {
  return (
    <Screen>
      <Box gap="s16">
        <Icon name="arrow-back" color="error" />
        <TextInput label="Email" placeholder="exemplo@email.com" />
        <PasswordInput label="Senha" placeholder="Digite a senha" />
        <Button title="Entrar" />
      </Box>
    </Screen>
  );
}
