import React from 'react';
import {Image, ImageStyle} from 'react-native';

import {Photo} from '@domain';

import {Box, Text} from '@components';

export function GalleryItem({url, title, width, height}: Photo) {
  return (
    <Box gap="s4">
      <Image source={{uri: url}} style={{...$styleImage(width, height)}} />
      <Text present="paragraphCaption">{title}</Text>
    </Box>
  );
}

const $styleImage = (width: number, height: number): ImageStyle => ({
  width: '100%',
  aspectRatio: width / height,
  borderRadius: 8,
});
