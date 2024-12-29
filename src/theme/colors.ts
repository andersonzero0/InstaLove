export const palette = {
  pinkPrimary: '#D923BA',
  pinkPrimaryLight: '#F9E8F4',
  greenSecondary: '#1E3231',
  greenSecondaryLight: '#E8F5F4',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#FAE6DD',
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
  transparent: 'transparent',
};

const lightTheme = {
  ...palette,
  primary: palette.greenSecondary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.greenSecondary,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  success: palette.greenSuccess,
  successLight: palette.greenSecondaryLight,

  error: palette.redError,
  errorLight: palette.redErrorLight,

  market: palette.greenSecondary,
  paragraph: palette.gray1,
  paragraphSecondary: palette.gray1,

  iconColor: palette.greenSecondary,
  iconFillColor: palette.grayWhite,

  onBackground1: palette.gray1,
  onBackground2: palette.gray4,
};

const darkTheme: typeof lightTheme = {
  ...palette,
  primary: palette.pinkPrimary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.pinkPrimary,

  background: palette.grayBlack,
  backgroundContrast: palette.grayWhite,

  success: palette.greenSuccess,
  successLight: palette.greenSuccessLight,

  error: palette.redError,
  errorLight: palette.redErrorLight,

  market: palette.pinkPrimary,
  paragraph: palette.grayWhite,
  paragraphSecondary: palette.gray3,

  iconColor: palette.grayWhite,
  iconFillColor: palette.grayBlack,

  onBackground1: palette.gray3,
  onBackground2: palette.gray1,
};

export const colors = {
  palette,
  lightTheme,
  darkTheme,
};
