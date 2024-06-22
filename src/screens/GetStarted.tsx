/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/ui/Button';
import {getFontSize, globalStyle, paddingSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const theme = useCareaTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {navigate} = useNavigation();

  return (
    <View style={[{backgroundColor: theme.bg_1}, globalStyle.container]}>
      <View style={[styles.showcase]} />
      <View style={[styles.getStarted]}>
        <Text style={[styles.getStartedText, {color: theme.text_1}]}>
          The best car in your hands with Carea
        </Text>
        <View style={[styles.dotWrapper]}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <View
                style={[
                  {
                    backgroundColor: theme.btn_bg,
                    width: index === activeIndex ? 30 : 10,
                  },
                  styles.dot,
                ]}
                key={index}
              />
            ))}
        </View>
        <Button
          text={activeIndex <= 1 ? 'Next' : 'Get Started'}
          onPress={() =>
            activeIndex <= 1
              ? setActiveIndex(prev => prev + 1)
              : navigate('Auth')
          }
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  showcase: {
    flex: 0.6,
  },
  getStarted: {
    flex: 0.4,
    paddingHorizontal: paddingSizes.medium,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: getFontSize(32),
    textAlign: 'center',
    fontWeight: '500',
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  dot: {
    height: 10,
    borderRadius: 100,
  },
});
