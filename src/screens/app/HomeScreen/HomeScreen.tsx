import React from 'react';

import {Screen} from '@components';
import {NewMoment} from './components/NewMoment';

export function HomeScreen() {
  return (
    <Screen flex={1}>
      <NewMoment />
    </Screen>
  );
}
