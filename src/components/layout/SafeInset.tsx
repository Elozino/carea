import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyle} from '../../constants/styles';
import {ViewStyle} from 'react-native';

const SafeInset = ({
  children,
  style,
}: PropsWithChildren & {style?: ViewStyle}) => {
  return (
    <SafeAreaView style={[globalStyle.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeInset;
