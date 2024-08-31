/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../hooks/useCareaTheme';
import {getFontSize, paddingSizes, textSizes} from '../constants/styles';
import CheckFillIcon from '../assets/svg/CheckFillIcon';

const OrderDetail = () => {
  const theme = useCareaTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: getFontSize(10),
      }}>
      <CheckFillIcon width={30} height={30} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: getFontSize(20),
        }}>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: theme.btn_bg,
              fontSize: textSizes.normal,
              fontWeight: '500',
            }}>
            OrderDetail Delivery (Train) - Dec 17
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: theme.btn_bg,
              fontSize: textSizes.base,
              marginTop: paddingSizes.xSmall,
            }}>
            32 Manchester Ave. Ringgold, GA 30736
          </Text>
        </View>
        <Text>15:20PM</Text>
      </View>
    </View>
  );
};

export default OrderDetail;
