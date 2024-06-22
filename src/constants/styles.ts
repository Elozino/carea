import {DimensionValue, Dimensions, PixelRatio, StyleSheet} from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (size: number) => size / fontScale;

export const textSizes = {
  xSmall: getFontSize(4),
  small: getFontSize(8),
  base: getFontSize(14),
  normal: getFontSize(16),
  medium: getFontSize(20),
  large: getFontSize(42),
  xxLarge: getFontSize(80),
};

type PaddingType = {
  [x: string]: DimensionValue;
};

export const paddingSizes: PaddingType = {
  xSmall: 4,
  small: 10,
  medium: 20,
  large: 30,
  xLarge: 40,
  xxLarge: 60,
};

export const FONT_FAMILY = {};

export const widthAndHeight = {
  full: '100%',
  half: '50%',
  third: '33.3333333333%',
  twoThirds: '66.6666666667%',
  quarter: '25%',
  medium: 52,
};

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: textSizes.large,
    fontWeight: '500',
    marginVertical: paddingSizes.medium,
  },
  formWrapper: {
    gap: 12,
  },
});

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
export const {width: SCREEN_WIDTH, height: SCREEN_height} =
  Dimensions.get('screen');
