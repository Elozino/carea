import {useColorScheme} from 'react-native';
import {CareaTheme, getCareaTheme} from '../constants/styles';

const useCareaTheme = (): CareaTheme => {
  const colorScheme = useColorScheme();

  return getCareaTheme(colorScheme);
};

export default useCareaTheme;
