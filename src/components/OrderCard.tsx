/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  getFontSize,
  globalStyle,
  paddingSizes,
  textSizes,
} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import Badge from './ui/Badge';
import {Button} from './ui/Button';
import {ROUTES} from '../constants/enums';
import {useNavigation} from '@react-navigation/native';
import {OrderStackParams} from '../types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OrderCard = ({
  badge = true,
  orderBtn = true,
  isCompleted,
  openModal,
}: {
  badge?: boolean;
  orderBtn?: boolean;
  isCompleted?: boolean;
  openModal?: () => void;
}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<OrderStackParams>>();
  const theme = useCareaTheme();
  return (
    <View style={[styles.cardWrapper, {backgroundColor: theme?.btn_bg1}]}>
      <View
        style={{
          backgroundColor: theme.gray,
          borderRadius: getFontSize(10),
          width: getFontSize(110),
          height: getFontSize(100),
          padding: paddingSizes.small,
        }}>
        <Image
          source={require('../assets/images/car.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={{color: theme?.btn_bg, ...styles.title}}>
          BMW M5 Series
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            gap: getFontSize(10),
          }}>
          <View
            style={{
              backgroundColor: 'yellow',
              width: getFontSize(15),
              height: getFontSize(15),
              borderRadius: getFontSize(15),
            }}
          />
          <Text style={[{color: theme?.btn_bg}]}>Silver</Text>
          {badge && <Badge text={'In Delivery'} />}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            gap: getFontSize(30),
          }}>
          <Text style={[styles.title, {color: theme?.btn_bg}]}>$ 120,000</Text>
          {orderBtn && (
            <Button
              text={isCompleted ? 'Leave a review' : 'Track Order'}
              style={{
                padding: getFontSize(10),
                height: getFontSize(35),
                backgroundColor: theme.gray,
                ...globalStyle.center,
              }}
              textStyle={{fontSize: getFontSize(12), color: theme?.white}}
              onPress={() =>
                isCompleted
                  ? openModal && openModal()
                  : navigate(ROUTES.TRACK_ORDER)
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    gap: getFontSize(15),
    borderRadius: getFontSize(20),
    padding: paddingSizes.medium,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    gap: getFontSize(10),
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: textSizes.normal,
  },
});
