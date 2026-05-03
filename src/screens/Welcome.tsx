import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants/enums';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../types/navigation';

const Welcome = () => {
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
    <View style={styles.screen}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/images/onboarding-welcome-hero.jpg')}
        style={styles.screen}
        imageStyle={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.backgroundShade} />
        <View style={styles.bottomShade} />
        <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
          <View style={styles.content}>
            <View />
            <View style={styles.copyBlock}>
              <Text style={styles.welcomeText}>Welcome to 👋</Text>
              <Text style={styles.brandName}>Carea</Text>
              <Text style={styles.description}>
                The best car marketplace app of the century for your
                transportation needs!
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    transform: [{scale: 1.04}],
  },
  safeArea: {
    flex: 1,
  },
  backgroundShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(7, 11, 18, 0.16)',
  },
  bottomShade: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: '48%',
    backgroundColor: 'rgba(7, 11, 18, 0.48)',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingTop: 12,
    paddingBottom: 26,
  },
  copyBlock: {
    gap: 12,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
    textShadowColor: 'rgba(0, 0, 0, 0.18)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 10,
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 66,
    fontWeight: '800',
    lineHeight: 70,
    letterSpacing: -2.2,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 12,
  },
  description: {
    maxWidth: '84%',
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 24,
  },
});
