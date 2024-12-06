import React from 'react';

import {useGalleryList} from '@domain';

import {ActivityIndicator, Box, Button, Icon, Screen} from '@components';
import {$shadowProps} from '@theme';

import {GalleryContainer} from './components';

export function GalleryScreen() {
  const {list, isFetching} = useGalleryList();

  return (
    <Box flex={1}>
      <Screen scrollable flex={1}>
        {isFetching ? (
          <Box justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <GalleryContainer data={list} />
          </Box>
        )}
      </Screen>
      <Button
        style={[{position: 'absolute', bottom: 8, right: 24}, $shadowProps]}
        icon={<Icon name="add-circle-sharp" color="background" />}
      />
    </Box>
  );
}
