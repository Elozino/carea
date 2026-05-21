import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {paddingSizes, textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';

interface IFlexTitle {
  title: string;
  btnTitle: string | React.ReactNode;
  onPress: () => void;
}

const FlexTitle = ({title, btnTitle, onPress}: IFlexTitle) => {
  const theme = useCareaTheme();
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, {color: theme.text_1}]}>{title}</Text>
      <Pressable onPress={onPress} style={[styles.btnWrapper]}>
        {typeof btnTitle !== 'string' ? (
          btnTitle
        ) : (
          <Text style={[styles.btnTitle, {color: theme.text_1}]}>
            {btnTitle}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default FlexTitle;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: paddingSizes.medium,
  },
  title: {
    fontSize: textSizes.normal,
    fontWeight: '500',
  },
  btnWrapper: {
    paddingVertical: paddingSizes.medium,
  },
  btnTitle: {
    fontSize: textSizes.base,
    fontWeight: '400',
  },
});
