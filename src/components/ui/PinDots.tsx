import React from 'react';
import {View, StyleSheet} from 'react-native';

type PinDotsProps = {
  length?: number;
  filled: number;
};

const PinDots = ({length = 4, filled}: PinDotsProps) => {
  return (
    <View style={styles.row}>
      {Array.from({length}).map((_, i) => (
        <View key={i} style={[styles.dot, i < filled && styles.dotFilled]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 24,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  dotFilled: {
    backgroundColor: '#000',
  },
});

export default PinDots;
