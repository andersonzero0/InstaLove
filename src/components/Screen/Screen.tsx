import React from 'react';
import {Box, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';
import {KeyboardAvoidingView, Platform} from 'react-native';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}: ScreenProps) {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
