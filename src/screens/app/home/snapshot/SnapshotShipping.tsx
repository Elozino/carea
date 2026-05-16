import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../../assets/svg';
import SafeInset from '../../../../components/layout/SafeInset';
import Topbar from '../../../../components/Topbar';
import AppTextInput from '../../../../components/ui/AppTextInput';
import {Button} from '../../../../components/ui/Button';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_SHIPPING'>;

const SnapshotShipping = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {draft} = route.params;

  const [shippingMethod, setShippingMethod] = useState(draft.shippingMethod);
  const [shippingAddress, setShippingAddress] = useState(draft.shippingAddress);
  const [city, setCity] = useState(draft.city);
  const [postalCode, setPostalCode] = useState(draft.postalCode);

  const isValid = useMemo(
    () =>
      shippingAddress.trim().length > 3 &&
      city.trim().length > 1 &&
      postalCode.trim().length > 3,
    [city, postalCode, shippingAddress],
  );

  return (
    <SafeInset>
      <Topbar
        text="Choose Shipping"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <ScrollView
        contentContainerStyle={{
          padding: paddingSizes.medium,
          gap: Number(paddingSizes.medium),
        }}>
        <View style={styles.progressRow}>
          {['Shipping', 'Payment', 'Review', 'PIN'].map((label, index) => (
            <View key={label} style={styles.progressItem}>
              <View
                style={[
                  styles.progressDot,
                  {backgroundColor: index === 0 ? theme.btn_bg : theme.gray},
                ]}
              />
              <Text style={{fontSize: textSizes.base, color: theme.text_3}}>
                {label}
              </Text>
            </View>
          ))}
        </View>

        <View style={[styles.section, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
            Shipping Method
          </Text>
          <View style={styles.methodRow}>
            <Pressable
              style={[
                styles.methodChip,
                {
                  backgroundColor:
                    shippingMethod === 'standard'
                      ? theme.btn_bg
                      : theme.btn_bg1,
                },
              ]}
              onPress={() => setShippingMethod('standard')}>
              <Text
                style={{
                  color:
                    shippingMethod === 'standard'
                      ? theme.btn_text
                      : theme.btn_bg,
                }}>
                Standard (5-7 days)
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.methodChip,
                {
                  backgroundColor:
                    shippingMethod === 'express' ? theme.btn_bg : theme.btn_bg1,
                },
              ]}
              onPress={() => setShippingMethod('express')}>
              <Text
                style={{
                  color:
                    shippingMethod === 'express'
                      ? theme.btn_text
                      : theme.btn_bg,
                }}>
                Express (2-3 days)
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.section, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
            Delivery Address
          </Text>
          <AppTextInput
            label="Street Address"
            value={shippingAddress}
            onChangeText={setShippingAddress}
          />
          <AppTextInput label="City" value={city} onChangeText={setCity} />
          <AppTextInput
            label="Postal Code"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="number-pad"
          />
        </View>

        <Button
          text="Continue to Payment"
          style={{backgroundColor: isValid ? theme.btn_bg : theme.gray}}
          disabled={!isValid}
          onPress={() =>
            navigation.navigate(ROUTES.SNAPSHOT_PAYMENT, {
              draft: {
                ...draft,
                shippingMethod,
                shippingAddress,
                city,
                postalCode,
              },
            })
          }
        />
      </ScrollView>
    </SafeInset>
  );
};

export default SnapshotShipping;

const styles = StyleSheet.create({
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressItem: {
    alignItems: 'center',
    gap: 6,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
  },
  section: {
    borderRadius: 16,
    padding: paddingSizes.medium,
    gap: Number(paddingSizes.small),
  },
  sectionTitle: {
    fontSize: textSizes.normal,
    fontWeight: '700',
  },
  methodRow: {
    flexDirection: 'row',
    gap: Number(paddingSizes.small),
  },
  methodChip: {
    flex: 1,
    paddingVertical: paddingSizes.small,
    paddingHorizontal: paddingSizes.small,
    borderRadius: 12,
    alignItems: 'center',
  },
});
