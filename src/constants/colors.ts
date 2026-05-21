import {Appearance} from 'react-native';
import {careaThemes} from './styles';

const scheme = Appearance.getColorScheme();

export const COLORS = careaThemes;

export const theme = scheme;
// export const theme = scheme === 'dark' ? COLORS.dark : COLORS.light;
