import React from 'react';

import {Box, Icon, Screen, Text} from '@components';
import {Image} from 'react-native';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export function HomeScreen() {
  const now = Date.now();

  // 12 de setembro de 2021 em pt-BR
  const formatDate = format(now, 'dd MMMM yyyy', {
    locale: ptBR,
  });

  return (
    <Screen flex={1} gap="s20">
      <Text preset="headingLarge">Registre um momento do seu dia</Text>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        gap="s8"
        height={300}>
        <Box flex={1} width="50%" gap="s12">
          <Text
            preset="paragraphMedium"
            semiBold>{`Hoje,\n${formatDate}`}</Text>
          <Text preset="paragraphLarge" italic color="gray3">
            Descreva o que você está sentindo...
          </Text>
        </Box>
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          width="50%"
          borderRadius="s16"
          position="relative">
          <Image
            source={{
              uri: 'https://img.freepik.com/fotos-gratis/plano-medio-de-uma-mulher-com-os-bracos-no-ar_23-2148283177.jpg',
            }}
            blurRadius={6}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              opacity: 0.5,
              flex: 1,
              borderRadius: 16,
            }}
          />
          <Box position="absolute">
            <Icon name="add-circle" size={48} color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
