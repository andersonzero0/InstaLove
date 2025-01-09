import React from 'react';

import {Button, Screen} from '@components';
import {NewMoment} from './components/NewMoment';
import {ListMoments} from './components/ListMoments';
import {mockMoments} from './mockMoments';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen scrollable gap="s32" noPaddingHorizontal affectedTab>
      <NewMoment />
      <Button
        title="Create Moment"
        onPress={() => navigation.navigate('MyMomentsScreen')}
      />
      <ListMoments moments={mockMoments} />
    </Screen>
  );
}
