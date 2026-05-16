import {
  ColorSchemeName,
  DimensionValue,
  Dimensions,
  PixelRatio,
  Platform,
  StatusBarStyle,
  StyleSheet,
} from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (size: number) => size / fontScale;

export type CareaThemeMode = 'light' | 'dark';
export type CareaBlurTint = 'light' | 'dark';

export const textSizes = {
  xSmall: getFontSize(4),
  small: getFontSize(8),
  base: getFontSize(14),
  normal: getFontSize(16),
  medium: getFontSize(20),
  medium_1: getFontSize(24),
  large_1: getFontSize(32),
  display: getFontSize(66),
  large: getFontSize(42),
  xxLarge: getFontSize(80),
};

type PaddingType = {
  [x: string]: number;
};

type DimensionType = {
  [x: string]: DimensionValue;
};

export const paddingSizes: PaddingType = {
  xSmall: 4,
  small: 10,
  medium: 16,
  medium_1: 20,
  large_1: 24,
  large: 30,
  xLarge: 40,
  xxLarge: 60,
};

export const radiusSizes = {
  xSmall: 6,
  small: 10,
  medium: 14,
  large: 20,
  xLarge: 28,
  xxLarge: 36,
  pill: 999,
};

export const borderWidths = {
  none: 0,
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  medium: 1.5,
  thick: 2,
};

export const opacityLevels = {
  faint: 0.32,
  muted: 0.52,
  soft: 0.72,
  strong: 0.9,
  disabled: 0.42,
};

export const motionDurations = {
  fast: 160,
  normal: 220,
  slow: 320,
};

export const motionSprings = {
  default: {
    damping: 18,
    stiffness: 300,
  },
  press: {
    damping: 14,
    stiffness: 220,
  },
};

export const interactionScales = {
  rest: 1,
  subtle: 1.01,
  heroMedia: 1.04,
};

export const FONT_FAMILY = {};

export const widthAndHeight: DimensionType = {
  full: '100%',
  half: '50%',
  third: '33.3333333333%',
  twoThirds: '66.6666666667%',
  quarter: '25%',
  medium: 52,
  control: 56,
  tabBarIos: 96,
  tabBarAndroid: 72,
};

export const componentSizes = {
  buttonHeight: widthAndHeight.medium,
  inputHeight: widthAndHeight.control,
  topBarMinHeight: 64,
  iconSmall: 16,
  iconMedium: 20,
  iconLarge: 24,
  iconXLarge: 30,
  iconXXLarge: 40,
  avatarSmall: 40,
  avatarMedium: 56,
  avatarLarge: 90,
};

export const letterSpacings = {
  display: -2,
  normal: 0.5,
  wide: 1,
  wider: 2,
};

export const shadowPresets = {
  soft: {
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  medium: {
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  floating: {
    shadowOffset: {width: 0, height: 16},
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 10,
  },
};

const statusPalette = {
  success: '#22C55E',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#38BDF8',
};

const brandPalette = {
  googleBlue: '#4285F4',
  googleGreen: '#34A853',
  googleYellow: '#FBBC05',
  googleRed: '#EB4335',
  facebookStart: '#18ACFE',
  facebookEnd: '#0163E0',
  paypal: '#003087',
  mastercardRed: '#EB001B',
  mastercardOrange: '#F79E1B',
  apple: '#000000',
};

type ThemeSeed = {
  background: {
    app: string;
    base: string;
    elevated: string;
    recessed: string;
    inverse: string;
    overlay: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  accent: {
    primary: string;
    secondary: string;
    contrast: string;
  };
  border: {
    subtle: string;
    strong: string;
    inverse: string;
  };
  glass: {
    blurTint: CareaBlurTint;
    blurIntensity: {
      subtle: number;
      medium: number;
      strong: number;
    };
    background: {
      subtle: string;
      medium: string;
      strong: string;
    };
    border: {
      subtle: string;
      medium: string;
      strong: string;
    };
    highlight: {
      soft: string;
      strong: string;
    };
    shadowColor: string;
  };
  neutral: {
    white: string;
    black: string;
  };
  scrim: string;
  statusBarStyle: StatusBarStyle;
};

export type CareaTheme = {
  mode: CareaThemeMode;
  isDark: boolean;
  statusBarStyle: StatusBarStyle;
  background: ThemeSeed['background'];
  surface: {
    base: string;
    elevated: string;
    recessed: string;
    inverse: string;
    overlay: string;
  };
  text: ThemeSeed['text'];
  accent: ThemeSeed['accent'];
  action: {
    primaryBackground: string;
    primaryText: string;
    secondaryBackground: string;
    secondaryText: string;
  };
  border: ThemeSeed['border'];
  glass: ThemeSeed['glass'];
  status: typeof statusPalette;
  brand: typeof brandPalette;
  neutral: ThemeSeed['neutral'];
  shadowColor: string;
  scrim: string;
  navigation: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  bg_1: string;
  bg_2: string;
  bg_3: string;
  text_1: string;
  text_2: string;
  text_3: string;
  btn_bg: string;
  btn_text: string;
  btn_bg1: string;
  black: string;
  gray: string;
  white: string;
};

const themeSeeds: Record<CareaThemeMode, ThemeSeed> = {
  light: {
    background: {
      app: '#F4F7FB',
      base: '#FFFFFF',
      elevated: '#FCFDFF',
      recessed: '#E8EDF4',
      inverse: '#091321',
      overlay: 'rgba(12, 20, 33, 0.18)',
    },
    text: {
      primary: '#0F1B2D',
      secondary: '#526173',
      tertiary: '#758399',
      inverse: '#F7FAFD',
    },
    accent: {
      primary: '#173A6B',
      secondary: '#5B86C6',
      contrast: '#FFFFFF',
    },
    border: {
      subtle: 'rgba(15, 27, 45, 0.08)',
      strong: 'rgba(15, 27, 45, 0.18)',
      inverse: 'rgba(255, 255, 255, 0.24)',
    },
    glass: {
      blurTint: 'light',
      blurIntensity: {
        subtle: 16,
        medium: 24,
        strong: 34,
      },
      background: {
        subtle: 'rgba(255, 255, 255, 0.50)',
        medium: 'rgba(255, 255, 255, 0.64)',
        strong: 'rgba(255, 255, 255, 0.82)',
      },
      border: {
        subtle: 'rgba(255, 255, 255, 0.42)',
        medium: 'rgba(255, 255, 255, 0.58)',
        strong: 'rgba(255, 255, 255, 0.78)',
      },
      highlight: {
        soft: 'rgba(255, 255, 255, 0.72)',
        strong: 'rgba(255, 255, 255, 0.94)',
      },
      shadowColor: '#24364F',
    },
    neutral: {
      white: '#FFFFFF',
      black: '#000200',
    },
    scrim: 'rgba(8, 16, 28, 0.42)',
    statusBarStyle: 'dark-content',
  },
  dark: {
    background: {
      app: '#07111A',
      base: '#0C1723',
      elevated: '#122033',
      recessed: '#16273B',
      inverse: '#F6F9FD',
      overlay: 'rgba(4, 8, 13, 0.48)',
    },
    text: {
      primary: '#F3F7FB',
      secondary: '#C0CBDA',
      tertiary: '#93A3B8',
      inverse: '#08111C',
    },
    accent: {
      primary: '#D8E5FF',
      secondary: '#86A9E6',
      contrast: '#07111A',
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.10)',
      strong: 'rgba(255, 255, 255, 0.22)',
      inverse: 'rgba(10, 18, 30, 0.24)',
    },
    glass: {
      blurTint: 'dark',
      blurIntensity: {
        subtle: 20,
        medium: 30,
        strong: 40,
      },
      background: {
        subtle: 'rgba(17, 31, 46, 0.44)',
        medium: 'rgba(18, 32, 49, 0.62)',
        strong: 'rgba(19, 34, 51, 0.76)',
      },
      border: {
        subtle: 'rgba(255, 255, 255, 0.10)',
        medium: 'rgba(255, 255, 255, 0.16)',
        strong: 'rgba(255, 255, 255, 0.24)',
      },
      highlight: {
        soft: 'rgba(255, 255, 255, 0.10)',
        strong: 'rgba(255, 255, 255, 0.20)',
      },
      shadowColor: '#01060C',
    },
    neutral: {
      white: '#FFFFFF',
      black: '#000200',
    },
    scrim: 'rgba(2, 6, 10, 0.62)',
    statusBarStyle: 'light-content',
  },
};

const buildTheme = (mode: CareaThemeMode, seed: ThemeSeed): CareaTheme => {
  const isDark = mode === 'dark';
  const action = {
    primaryBackground: seed.accent.primary,
    primaryText: seed.accent.contrast,
    secondaryBackground: isDark
      ? 'rgba(216, 229, 255, 0.14)'
      : 'rgba(23, 58, 107, 0.10)',
    secondaryText: seed.text.primary,
  };

  return {
    mode,
    isDark,
    statusBarStyle: seed.statusBarStyle,
    background: seed.background,
    surface: {
      base: seed.background.base,
      elevated: seed.background.elevated,
      recessed: seed.background.recessed,
      inverse: seed.background.inverse,
      overlay: seed.background.overlay,
    },
    text: seed.text,
    accent: seed.accent,
    action,
    border: seed.border,
    glass: seed.glass,
    status: statusPalette,
    brand: brandPalette,
    neutral: seed.neutral,
    shadowColor: seed.glass.shadowColor,
    scrim: seed.scrim,
    navigation: {
      primary: seed.accent.primary,
      background: seed.background.app,
      card: seed.background.elevated,
      text: seed.text.primary,
      border: seed.border.subtle,
      notification: statusPalette.error,
    },
    bg_1: seed.background.app,
    bg_2: seed.background.base,
    bg_3: seed.background.elevated,
    text_1: seed.text.primary,
    text_2: seed.text.secondary,
    text_3: seed.text.tertiary,
    btn_bg: action.primaryBackground,
    btn_text: action.primaryText,
    btn_bg1: action.secondaryBackground,
    black: seed.neutral.black,
    gray: seed.background.recessed,
    white: seed.neutral.white,
  };
};

export const careaThemes: Record<CareaThemeMode, CareaTheme> = {
  light: buildTheme('light', themeSeeds.light),
  dark: buildTheme('dark', themeSeeds.dark),
};

export const getCareaTheme = (scheme?: ColorSchemeName | null): CareaTheme =>
  scheme === 'dark' ? careaThemes.dark : careaThemes.light;

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeSeeds.light.background.app,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  navTopTabContainer: {
    flexDirection: 'row',
    marginBottom: paddingSizes.medium,
    paddingHorizontal: paddingSizes.medium,
  },
});

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
export const {width: SCREEN_WIDTH, height: SCREEN_height} =
  Dimensions.get('screen');

export const isAndroid = Platform.OS === 'android';
