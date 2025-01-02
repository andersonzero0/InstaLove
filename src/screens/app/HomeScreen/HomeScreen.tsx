import React from 'react';

import {Screen} from '@components';
import {NewMoment} from './components/NewMoment';
import {ListMoments} from './components/ListMoments';
import {mockMoments} from './mockMoments';

export function HomeScreen() {
  return (
    <Screen scrollable gap="s32" noPaddingHorizontal affectedTab>
      <NewMoment />
      <ListMoments moments={mockMoments} />
    </Screen>
  );
}
