import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold = false,
  italic = false,
  semiBold = false,
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold: boolean,
  italic: boolean,
  semiBold: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  if (bold && italic) {
    return $fontFamily.boldItalic;
  }
  if (bold) {
    return $fontFamily.bold;
  }
  if (semiBold && italic) {
    return $fontFamily.mediumItalic;
  }
  if (semiBold) {
    return $fontFamily.medium;
  }
  if (italic) {
    return $fontFamily.italic;
  }
  return $fontFamily.regular;
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  italic: 'Poppins-Italic',
  light: 'Poppins-LIght',
  lightItalic: 'Poppins-LightItalic',
  medium: 'Poppins-Medium',
  mediumItalic: 'Poppins-MediumItalic',
  regular: 'Poppins-Regular',
};
