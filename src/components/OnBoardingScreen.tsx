import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { IMAGES } from '../constants/images'
import { paddingSizes, textSizes } from '../constants/styles';

const OnBoardingScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground
        source={require('../assets/images/onboarding1.jpg')}
        style={styles.container}
        resizeMode='cover'
      >
        <View style={styles.wrapper}>
          <Text style={[styles.textColor, styles.welcomeText]}>Welcome to 👋</Text>
          <Text style={[styles.textColor, styles.brandName]}>Carea</Text>
          <Text style={[styles.textColor, styles.description]}>The best car marketplace app of the century for your transportation needs!</Text>
        </View>
      </ImageBackground>
    </>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: paddingSizes.medium,
    marginBottom: paddingSizes.large,
  },
  welcomeText: {
    fontSize: textSizes.large,
  },
  brandName: {
    fontSize: textSizes.xxLarge,
    fontWeight: '600',
  },
  description: {
    fontSize: textSizes.medium,
    fontWeight: '600',
  },
  textColor: {
    color: 'white',
    fontSize: 24
  }
})