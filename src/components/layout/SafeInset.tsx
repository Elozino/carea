import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyle} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import Topbar from '../Topbar';

type SafeInsetHeader = {
  title?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onLeftPress?: () => void;
  onRightPress?: () => void;
};

type SafeInsetProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  header?: SafeInsetHeader;
}>;

const SafeInset = ({children, style, header}: SafeInsetProps) => {
  const theme = useCareaTheme();

  return (
    <SafeAreaView
      style={[globalStyle.container, {backgroundColor: theme.background.app}]}>
      {header ? (
        <Topbar
          text={header.title ?? ''}
          leftIcon={header.leftIcon}
          rightIcon={header.rightIcon}
          leftIconAction={header.onLeftPress}
          rightIconAction={header.onRightPress}
        />
      ) : null}
      <View style={[styles.content, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeInset;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
