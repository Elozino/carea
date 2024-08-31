/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../hooks/useCareaTheme';
import {paddingSizes, textSizes} from '../constants/styles';

const SpecialOfferCard = () => {
  const theme = useCareaTheme();
  return (
    <View style={[styles.specialOfferWrapper, {backgroundColor: theme.bg_2}]}>
      <View style={{flex: 0.5, gap: 10}}>
        <Text
          style={[
            {
              color: theme.black,
              fontSize: textSizes.large,
              fontWeight: '700',
            },
          ]}>
          20%
        </Text>
        <Text
          style={[
            {
              color: theme.black,
              fontSize: textSizes.medium,
              fontWeight: '700',
            },
          ]}>
          Week Deals
        </Text>
        <Text style={[{color: theme.black, fontSize: textSizes.base}]}>
          Get a new car discount only valid this week
        </Text>
      </View>
      <View style={styles.specialOfferImgWarapper}>
        <Image
          source={require('../assets/images/car.png')}
          resizeMode="cover"
          style={styles.specialOfferImg}
        />
      </View>
    </View>
  );
};
export default SpecialOfferCard;

const styles = StyleSheet.create({
  specialOfferWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: paddingSizes.medium,
    position: 'relative',
    height: 200,
    marginHorizontal: paddingSizes.medium,
  },
  specialOfferImgWarapper: {
    flex: 0.5,
    position: 'absolute',
    top: 50,
    right: 0,
  },
  specialOfferImg: {
    width: 220,
    height: 100,
  },
});
