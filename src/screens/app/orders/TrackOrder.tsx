/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import Topbar from '../../../components/Topbar';
import {ArrowLeftIcon} from '../../../assets/svg';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OrderStackParams} from '../../../types/navigation';
import SafeInset from '../../../components/layout/SafeInset';
import OrderCard from '../../../components/OrderCard';
import {getFontSize, paddingSizes, textSizes} from '../../../constants/styles';
import OrderBoxIcon from '../../../assets/svg/OrderBoxIcon';
import CheckFillIcon from '../../../assets/svg/CheckFillIcon';
import BoxOpenedIcon from '../../../assets/svg/BoxOpenedIcon';
import DeliveryGuyIcon from '../../../assets/svg/DeliveryGuyIcon';
import DeliveryIcon from '../../../assets/svg/DeliveryIcon';
import OrderDetail from '../../../components/OrderDetail';

const TrackOrder = () => {
  const theme = useCareaTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<OrderStackParams>>();
  return (
    <SafeInset>
      <Topbar
        text={'Track Order'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <ScrollView
        style={{flexGrow: 1}}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <OrderCard badge={false} orderBtn={false} />
        <View style={styles.containerStyleWrapper}>
          <View style={styles.iconContainer}>
            <OrderBoxIcon width={40} height={40} fill={theme?.btn_bg} />
            <CheckFillIcon width={20} height={20} fill={theme?.btn_bg} />
          </View>
          <View style={styles.iconContainer}>
            <DeliveryIcon width={40} height={40} fill={theme?.btn_bg} />
            <CheckFillIcon width={20} height={20} fill={theme?.btn_bg} />
          </View>
          <View style={styles.iconContainer}>
            <DeliveryGuyIcon width={40} height={40} fill={theme?.btn_bg} />
            <CheckFillIcon width={20} height={20} fill={theme?.btn_bg} />
          </View>
          <View style={styles.iconContainer}>
            <BoxOpenedIcon width={40} height={40} fill={theme?.btn_bg} />
            <CheckFillIcon width={20} height={20} fill={theme?.btn_bg} />
          </View>
        </View>
        <Text
          style={{
            color: theme.btn_bg,
            textAlign: 'center',
            fontSize: textSizes.medium,
            fontWeight: '600',
          }}>
          Car in Delivery (Train)
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            marginTop: paddingSizes.medium,
            borderBottomColor: theme.gray,
          }}
        />
        <View>
          <Text
            style={{
              color: theme.btn_bg,
              fontSize: textSizes.medium,
              marginVertical: paddingSizes.medium,
              fontWeight: '500',
            }}>
            Order Status Details
          </Text>
          <View style={{gap: getFontSize(20)}}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <OrderDetail key={i} />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeInset>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    padding: paddingSizes.medium,
    paddingBottom: Platform.OS === 'ios' ? 70 : 100,
  },
  containerStyleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: paddingSizes.large,
    paddingHorizontal: paddingSizes.medium,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: getFontSize(5),
  },
});
