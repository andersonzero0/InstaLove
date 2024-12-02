import React from 'react';
import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';
import {useNavigation} from '@react-navigation/native';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

export function ScreenHeader({title, canGoBack}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      mb="s16"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={navigation.goBack}>
          <Icon name="arrow-back" color="primary" />
          {!title && (
            <Text present="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}

      {title && <Text present="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
