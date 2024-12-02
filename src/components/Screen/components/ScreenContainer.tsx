import React from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: ViewStyle['backgroundColor'];
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}
