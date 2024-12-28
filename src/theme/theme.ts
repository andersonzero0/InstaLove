import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

export const palette = {
  pinkPrimary: '#D923BA',
  pinkPrimaryLight: '#F9E8F4',
  greenSecondary: '#1E3231',
  greenSecondaryLight: '#E8F5F4',
  greenSuccess: '#4ABC86',
  greenSucessLight: '#FAE6DD',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  grayBlack2: '#0D0D0D',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.pinkPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.pinkPrimary,

    background: palette.grayBlack2,
    backgroundContrast: palette.grayWhite,

    success: palette.greenSuccess,
    successLight: palette.greenSucessLight,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    market: palette.greenSecondary,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s22: 22,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#FFF6',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {width: -2, height: 4},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
