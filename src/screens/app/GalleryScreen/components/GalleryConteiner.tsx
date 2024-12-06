import React from 'react';

import {Photo} from '@domain';

import {Box} from '@components';

import {GalleryItem} from './GalleryItem';

type Props = {
  data: Photo[] | undefined;
};

export function GalleryContainer({data}: Props) {
  const leftColumn: Photo[] = [];
  const rightColumn: Photo[] = [];

  data?.forEach((photo, index) => {
    if (index % 2 === 0) {
      leftColumn.push(photo);
    } else {
      rightColumn.push(photo);
    }
  });

  return (
    <Box flexDirection="row" flex={1} gap="s8">
      <Box flex={1} gap="s8" flexDirection="column">
        {leftColumn.map(photo => (
          <GalleryItem key={photo.id} {...photo} />
        ))}
      </Box>
      <Box flex={1} gap="s8" flexDirection="column">
        {rightColumn.map(photo => (
          <GalleryItem key={photo.id} {...photo} />
        ))}
      </Box>
    </Box>
  );
}
