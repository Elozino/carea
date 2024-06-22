import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {paddingSizes, textSizes} from '../constants/styles';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const {navigate} = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'default'}
      />
      <ImageBackground
        source={require('../assets/images/onboarding1.jpg')}
        style={styles.container}
        resizeMode="cover">
        <View style={styles.wrapper}>
          <Text style={[styles.textColor, styles.welcomeText]}>
            Welcome to 👋
          </Text>
          <Text style={[styles.textColor, styles.brandName]}>Carea</Text>
          <Text style={[styles.textColor, styles.description]}>
            The best car marketplace app of the century for your transportation
            needs!
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: paddingSizes.medium,
    marginBottom: paddingSizes.large,
  },
  welcomeText: {
    fontSize: textSizes.large,
    fontWeight: '700',
  },
  brandName: {
    fontSize: textSizes.xxLarge,
    fontWeight: '800',
  },
  description: {
    fontSize: textSizes.medium,
    fontWeight: '600',
  },
  textColor: {
    color: 'white',
    fontSize: 24,
  },
});
