import {DimensionValue, Dimensions, PixelRatio} from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

export const textSizes = {
  xSmall: getFontSize(8),
  small: getFontSize(8),
  medium: getFontSize(16),
  large: getFontSize(28),
  xxLarge: getFontSize(60),
};

type PaddingType = {
  [x: string]: DimensionValue,
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

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
export const {width: SCREEN_WIDTH, height: SCREEN_height} =
  Dimensions.get('screen');
