import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../hooks/useCareaTheme';
import {paddingSizes, textSizes} from '../../constants/styles';

const NotificationCard = () => {
  const theme = useCareaTheme();
  return (
    <View style={[styles.cardWrapper, {backgroundColor: theme.btn_bg1}]}>
      <View style={[styles.iconWrapper, {backgroundColor: theme.btn_bg}]}>
        <View />
      </View>
      <View style={[styles.textWrapper]}>
        <Text
          style={[styles.title, {color: theme.text_1}]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          Your offer has been accepted
        </Text>
        <Text
          style={[styles.subText, {color: theme.text_1}]}
          ellipsizeMode="tail"
          numberOfLines={2}>
          Congrats! our offer has been accepted by the seller for $170,000
        </Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    gap: 10,
    padding: paddingSizes.small,
    borderRadius: 10,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textWrapper: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: textSizes.normal,
  },
  subText: {
    fontWeight: '500',
  },
});
