import {Appearance} from 'react-native';

const scheme = Appearance.getColorScheme();

export const COLORS = {
  light: {
    bg_1: '#fff',
    bg_2: '',
    bg_3: '',
    text_1: '#000200',
    text_2: '',
    text_3: '',
    btn_bg: '#000',
    btn_text: '#fff',
  },
  dark: {
    bg_1: '#000200',
    bg_2: '',
    bg_3: '',
    text_1: '#fff',
    text_2: '',
    text_3: '',
    btn_bg: '#fff',
    btn_text: '#000',
  },
};

export const theme = scheme;
// export const theme = scheme === 'dark' ? COLORS.dark : COLORS.light;
