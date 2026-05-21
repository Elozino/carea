import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/ui/Button';
import {ROUTES} from '../constants/enums';
import {
  globalStyle,
  opacityLevels,
  paddingSizes,
  radiusSizes,
  textSizes,
} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import {AuthStackParams} from '../types/navigation';

const GetStarted = () => {
  const theme = useCareaTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  return (
    <View
      style={[globalStyle.container, {backgroundColor: theme.background.app}]}>
      <StatusBar
        barStyle={theme.statusBarStyle}
        backgroundColor={theme.background.app}
      />
      <View style={[styles.showcase]} />
      <View style={[styles.getStarted]}>
        <Text style={[styles.getStartedText, {color: theme.text.primary}]}>
          The best car in your hands with Carea
        </Text>
        <View style={[styles.dotWrapper]}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <View
                style={[
                  {
                    backgroundColor: theme.action.primaryBackground,
                    opacity:
                      index === activeIndex
                        ? opacityLevels.strong
                        : opacityLevels.faint,
                    width:
                      index === activeIndex
                        ? Number(paddingSizes.large)
                        : Number(paddingSizes.small),
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
              : navigate(ROUTES.AUTH)
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
    fontSize: textSizes.large_1,
    textAlign: 'center',
    fontWeight: '500',
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: paddingSizes.xSmall,
  },
  dot: {
    height: paddingSizes.small,
    borderRadius: radiusSizes.pill,
  },
});
