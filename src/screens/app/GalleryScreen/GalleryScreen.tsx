import React from 'react';
import {Image} from 'react-native';

import {useGalleryList} from '@domain';

import {Box, Screen, Text} from '@components';

export function GalleryScreen() {
  const {list} = useGalleryList();

  console.log(list);

  return (
    <Screen scrollable>
      <Text>
        {list &&
          list?.map(item => {
            return (
              <Box key={item.id}>
                <Image src={item.url} style={{width: 100, height: 100}} />
              </Box>
            );
          })}
      </Text>
    </Screen>
  );
}
