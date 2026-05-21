import React, {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyle} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

const SafeInset = ({
  children,
  style,
}: PropsWithChildren & {style?: ViewStyle}) => {
  const theme = useCareaTheme();

  return (
    <SafeAreaView
      style={[
        globalStyle.container,
        {backgroundColor: theme.background.app},
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeInset;
