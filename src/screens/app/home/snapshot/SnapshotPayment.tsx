/* eslint-disable react-native/no-inline-styles */
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
import {
  HomeStackParams,
  SnapshotCheckoutDraft,
} from '../../../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_PAYMENT'>;

const PAYMENT_METHODS: SnapshotCheckoutDraft['paymentMethod'][] = [
  'bank',
  'paypal',
  'google',
];

const SnapshotPayment = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {draft} = route.params;

  const [paymentMethod, setPaymentMethod] = useState(draft.paymentMethod);
  const [cardHolder, setCardHolder] = useState(draft.cardHolder);
  const [cardNumber, setCardNumber] = useState(draft.cardNumber);
  const [expiryDate, setExpiryDate] = useState(draft.expiryDate);
  const [cvv, setCvv] = useState(draft.cvv);

  const isValid = useMemo(
    () =>
      cardHolder.trim().length > 2 &&
      cardNumber.replace(/\s/g, '').length >= 12 &&
      expiryDate.trim().length >= 4 &&
      cvv.trim().length >= 3,
    [cardHolder, cardNumber, expiryDate, cvv],
  );

  return (
    <SafeInset>
      <Topbar
        text="Payment Method"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <ScrollView
        contentContainerStyle={{
          padding: paddingSizes.medium,
          gap: Number(paddingSizes.medium),
        }}>
        <View style={[styles.section, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
            Select Method
          </Text>
          <View style={styles.methodRow}>
            {PAYMENT_METHODS.map(method => {
              const selected = paymentMethod === method;
              return (
                <Pressable
                  key={method}
                  style={[
                    styles.methodChip,
                    {backgroundColor: selected ? theme.btn_bg : theme.btn_bg1},
                  ]}
                  onPress={() => setPaymentMethod(method)}>
                  <Text
                    style={{color: selected ? theme.btn_text : theme.btn_bg}}>
                    {method.toUpperCase()}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={[styles.section, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.sectionTitle, {color: theme.btn_bg}]}>
            Card Details
          </Text>
          <AppTextInput
            label="Card Holder"
            value={cardHolder}
            onChangeText={setCardHolder}
          />
          <AppTextInput
            label="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
          />
          <View style={{flexDirection: 'row', gap: Number(paddingSizes.small)}}>
            <View style={{flex: 1}}>
              <AppTextInput
                label="Expiry"
                value={expiryDate}
                onChangeText={setExpiryDate}
                placeholder="MM/YY"
              />
            </View>
            <View style={{flex: 1}}>
              <AppTextInput
                label="CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="number-pad"
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <Button
          text="Review Order"
          style={{backgroundColor: isValid ? theme.btn_bg : theme.gray}}
          disabled={!isValid}
          onPress={() =>
            navigation.navigate(ROUTES.SNAPSHOT_REVIEW, {
              draft: {
                ...draft,
                paymentMethod,
                cardHolder,
                cardNumber,
                expiryDate,
                cvv,
              },
            })
          }
        />
      </ScrollView>
    </SafeInset>
  );
};

export default SnapshotPayment;

const styles = StyleSheet.create({
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
    borderRadius: 12,
    paddingVertical: paddingSizes.small,
    alignItems: 'center',
  },
});
