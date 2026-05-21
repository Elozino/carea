import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BlurView} from 'expo-blur';
import React, {useEffect} from 'react';
import {
  ImageBackground,
  ImageStyle,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  borderWidths,
  interactionScales,
  letterSpacings,
  opacityLevels,
  paddingSizes,
  radiusSizes,
  shadowPresets,
  textSizes,
  widthAndHeight,
} from '../constants/styles';
import {ROUTES} from '../constants/enums';
import useCareaTheme from '../hooks/useCareaTheme';
import {AuthStackParams} from '../types/navigation';

const Welcome = () => {
  const theme = useCareaTheme();
  const {replace} = useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      replace(ROUTES.GET_STARTED);
    }, 2200);

    return () => {
      clearTimeout(timeout);
    };
  }, [replace]);

  return (
    <View style={[styles.screen, {backgroundColor: theme.background.app}]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/images/onboarding-welcome-hero.jpg')}
        style={styles.screen}
        imageStyle={backgroundImageStyle}
        resizeMode="cover">
        <View
          style={[
            styles.backgroundShade,
            {backgroundColor: theme.background.overlay},
          ]}
        />
        <View style={[styles.bottomShade, {backgroundColor: theme.scrim}]} />
        <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
          <View style={styles.content}>
            <View />
            <View style={[styles.copyShell, {shadowColor: theme.shadowColor}]}>
              <BlurView
                intensity={theme.glass.blurIntensity.strong}
                tint={theme.glass.blurTint}
                style={StyleSheet.absoluteFill}
              />
              <View
                pointerEvents="none"
                style={[
                  styles.copyMembrane,
                  {backgroundColor: theme.glass.background.medium},
                ]}
              />
              <View
                pointerEvents="none"
                style={[
                  styles.copyHighlight,
                  {backgroundColor: theme.glass.highlight.soft},
                ]}
              />
              <View
                style={[
                  styles.copyBlock,
                  {borderColor: theme.glass.border.medium},
                ]}>
                <Text style={[styles.welcomeText, {color: theme.text.inverse}]}>
                  Welcome to 👋
                </Text>
                <Text style={[styles.brandName, {color: theme.text.inverse}]}>
                  Carea
                </Text>
                <Text style={[styles.description, {color: theme.text.inverse}]}>
                  The best car marketplace app of the century for your
                  transportation needs!
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const backgroundImageStyle: ImageStyle = {
  transform: [{scale: interactionScales.heroMedia}],
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  backgroundShade: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomShade: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: widthAndHeight.half,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: paddingSizes.medium_1,
    paddingTop: paddingSizes.small,
    paddingBottom: paddingSizes.large_1,
  },
  copyShell: {
    borderRadius: radiusSizes.xxLarge,
    overflow: 'hidden',
    ...shadowPresets.floating,
  },
  copyBlock: {
    gap: Number(paddingSizes.small) + borderWidths.thick,
    padding: paddingSizes.large_1,
    borderRadius: radiusSizes.xxLarge,
    borderWidth: borderWidths.thin,
  },
  welcomeText: {
    fontSize: textSizes.medium_1,
    fontWeight: '700',
    lineHeight: Number(paddingSizes.large),
  },
  brandName: {
    fontSize: textSizes.display,
    fontWeight: '800',
    letterSpacing: letterSpacings.display,
  },
  description: {
    paddingRight: paddingSizes.xLarge,
    fontSize: textSizes.normal,
    fontWeight: '500',
    lineHeight: Number(paddingSizes.large_1),
    opacity: opacityLevels.strong,
  },
  copyMembrane: {
    ...StyleSheet.absoluteFillObject,
  },
  copyHighlight: {
    position: 'absolute',
    top: 0,
    left: paddingSizes.medium,
    right: paddingSizes.medium,
    height: borderWidths.thin,
    borderRadius: borderWidths.thin,
  },
});
