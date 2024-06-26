import {Appearance} from 'react-native';

const scheme = Appearance.getColorScheme();

export const COLORS = {
  light: {
    bg_1: '#fff',
    bg_2: '#eeeeee',
    bg_3: '',
    text_1: '#000200',
    text_2: '',
    text_3: '#000',
    btn_bg: '#000',
    btn_text: '#fff',
    btn_bg1: '#eee',
    black: '#000200',
  },
  dark: {
    bg_1: '#000200',
    bg_2: '#eeeeee',
    bg_3: '',
    text_1: '#fff',
    text_2: '#cecece',
    text_3: '#000',
    btn_bg: '#fff',
    btn_text: '#000',
    btn_bg1: '#33333340',
    black: '#000200',
  },
};

export const theme = scheme;
// export const theme = scheme === 'dark' ? COLORS.dark : COLORS.light;
