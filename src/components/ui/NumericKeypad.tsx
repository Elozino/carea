import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {paddingSizes, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

type NumericKeypadProps = {
  onDigitPress: (digit: string) => void;
  onDeletePress: () => void;
  onSubmitPress?: () => void;
  submitLabel?: string;
  disableSubmit?: boolean;
};

const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'DEL'];

const NumericKeypad = ({
  onDigitPress,
  onDeletePress,
  onSubmitPress,
  submitLabel = 'Continue',
  disableSubmit,
}: NumericKeypadProps) => {
  const theme = useCareaTheme();

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {DIGITS.map(value => {
          if (!value) {
            return <View key="empty" style={styles.key} />;
          }

          const isDelete = value === 'DEL';
          return (
            <Pressable
              key={value}
              style={[styles.key, {backgroundColor: theme.bg_2}]}
              onPress={() =>
                isDelete ? onDeletePress() : onDigitPress(value)
              }>
              <Text style={[styles.keyText, {color: theme.btn_bg}]}>
                {value}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {onSubmitPress ? (
        <Pressable
          style={[
            styles.submitButton,
            {
              backgroundColor: disableSubmit ? theme.gray : theme.btn_bg,
            },
          ]}
          disabled={disableSubmit}
          onPress={onSubmitPress}>
          <Text style={[styles.submitText, {color: theme.btn_text}]}>
            {submitLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default NumericKeypad;

const styles = StyleSheet.create({
  container: {
    gap: Number(paddingSizes.medium),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: Number(paddingSizes.small),
  },
  key: {
    width: '31%',
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: textSizes.medium,
    fontWeight: '700',
  },
  submitButton: {
    height: 52,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: textSizes.normal,
    fontWeight: '700',
  },
});
