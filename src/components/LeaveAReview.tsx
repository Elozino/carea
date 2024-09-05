/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GalleryIcon} from '../assets/svg';
import StarIcon from '../assets/svg/StarIcon';
import {
  getFontSize,
  paddingSizes,
  SCREEN_height,
  textSizes,
} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import OrderCard from './OrderCard';
import AppTextInput from './ui/AppTextInput';
import {Button} from './ui/Button';

const LeaveAReview = ({closeModal}) => {
  const theme = useCareaTheme();
  return (
    <View
      style={{
        height: (2 / 3) * SCREEN_height,
        backgroundColor: theme?.btn_bg1,
        borderTopRightRadius: textSizes.medium_1,
        borderTopLeftRadius: textSizes.medium_1,
        padding: paddingSizes.medium,
      }}>
      <Text style={[styles.title, {color: theme.btn_bg}]}>Leave a review</Text>
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: paddingSizes.medium,
          borderBottomColor: theme.gray,
        }}
      />
      <View style={{marginVertical: paddingSizes.large}}>
        <OrderCard isActive={false} />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.gray,
        }}
      />
      <View
        style={{
          marginTop: paddingSizes.medium,
          flex: 1,
        }}>
        <Text style={[styles.title, {color: theme.btn_bg}]}>
          How is your car?
        </Text>
        <Text style={[styles.subText, {color: theme.gray}]}>
          Please give your rating & also your review...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: getFontSize(10),
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: paddingSizes.large,
          }}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <StarIcon key={i} width={25} height={25} fill={theme.btn_bg} />
            ))}
        </View>
        <AppTextInput rightIcon={<GalleryIcon width={20} height={20} />} />
        <View style={styles.btnContainer}>
          <Button
            text="Cancel"
            style={[styles.btn, {backgroundColor: theme.gray}]}
            onPress={closeModal}
          />
          <Button text="Submit" style={styles.btn} onPress={closeModal} />
        </View>
      </View>
    </View>
  );
};

export default LeaveAReview;

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: getFontSize(35),
    borderTopEndRadius: getFontSize(35),
    padding: paddingSizes.large,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: textSizes.medium,
    fontWeight: 'bold',
    marginVertical: paddingSizes.xSmall,
  },
  subText: {
    textAlign: 'center',
    fontSize: textSizes.normal,
    fontWeight: '500',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: getFontSize(20),
    marginTop: paddingSizes.large,
  },
  btn: {
    flex: 1,
  },
});
