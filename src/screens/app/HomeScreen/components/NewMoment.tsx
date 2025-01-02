import {
  Box,
  Button,
  Icon,
  Text,
  TextInput,
  TouchableOpacityBox,
} from '@components';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {useState} from 'react';
import {Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function NewMoment() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      selectionLimit: 1,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log('Image picker canceled');
    }
  };

  const now = Date.now();

  const formatDate = format(now, 'dd MMMM yyyy', {
    locale: ptBR,
  });

  return (
    <Box gap="s20" paddingHorizontal="s24">
      <Box>
        <Text preset="headingMedium">{`Registre um\nmomento do seu dia`}</Text>
        <Text preset="paragraphMedium">{`Hoje, ${formatDate}`}</Text>
      </Box>

      <Box flexDirection="row" justifyContent="space-between" gap="s8">
        <Box
          flex={1}
          width="50%"
          aspectRatio={9 / 16}
          justifyContent="space-between">
          <Box gap="s8">
            <TextInput
              transparent
              multiline
              maxLength={100}
              noBorder
              placeholder={`Descreva o que você está sentindo...\n\nMáx. 100 caracteres`}></TextInput>
          </Box>
          <Button title="Registrar" />
        </Box>

        <TouchableOpacityBox
          flex={1}
          alignItems="center"
          justifyContent="center"
          width="50%"
          aspectRatio={9 / 16}
          borderRadius="s16"
          onPress={pickImageAsync}
          style={{position: 'relative'}}>
          <Image
            source={{
              uri: selectedImage
                ? selectedImage
                : 'https://img.freepik.com/fotos-gratis/plano-medio-de-uma-mulher-com-os-bracos-no-ar_23-2148283177.jpg',
            }}
            blurRadius={selectedImage ? 0 : 6}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              opacity: selectedImage ? 1 : 0.6,
              flex: 1,
              borderRadius: 16,
            }}
          />
          {!selectedImage && (
            <Box position="absolute">
              <Icon name="add-circle" size={48} color="grayWhite" />
            </Box>
          )}
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
