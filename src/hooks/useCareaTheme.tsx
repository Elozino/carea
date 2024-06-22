import {useEffect, useState} from 'react';
import {Appearance, ColorSchemeName} from 'react-native';
import {COLORS} from '../constants/colors';

const useCareaTheme = () => {
  const [theme, setTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme() ?? 'light',
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(handleAppearanceChange);

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppearanceChange = ({
    colorScheme,
  }: {
    colorScheme: ColorSchemeName;
  }) => {
    setTheme(colorScheme === 'dark' ? 'dark' : 'light');
  };

  return theme === 'dark' ? COLORS.dark : COLORS.light;
};

export default useCareaTheme;
