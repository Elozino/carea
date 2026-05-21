/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../../assets/svg';
import SafeInset from '../../../../components/layout/SafeInset';
import Topbar from '../../../../components/Topbar';
import {Button} from '../../../../components/ui/Button';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../../types/navigation';
import {formatCurrency} from './mockData';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_REVIEW'>;

const SnapshotReview = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {draft} = route.params;

  return (
    <SafeInset>
      <Topbar
        text="Review Summary"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <ScrollView
        contentContainerStyle={{
          padding: paddingSizes.medium,
          gap: Number(paddingSizes.medium),
        }}>
        <View style={[styles.card, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.title, {color: theme.btn_bg}]}>
            Order Summary
          </Text>
          <SummaryRow label="Product" value={draft.productName} />
          <SummaryRow label="Seller Price" value={draft.price} />
          <SummaryRow
            label="Winning Bid"
            value={formatCurrency(draft.offerAmount)}
          />
          <SummaryRow
            label="Bid Attempts"
            value={draft.bidAttempts ? String(draft.bidAttempts) : '1'}
          />
          {draft.lastCounterBid ? (
            <SummaryRow
              label="Last Rival Bid"
              value={formatCurrency(draft.lastCounterBid)}
            />
          ) : null}
          <SummaryRow
            label="Shipping"
            value={draft.shippingMethod === 'express' ? 'Express' : 'Standard'}
          />
          <SummaryRow
            label="Address"
            value={`${draft.shippingAddress}, ${draft.city}`}
          />
          <SummaryRow label="Postal" value={draft.postalCode} />
          <SummaryRow
            label="Payment"
            value={`${draft.paymentMethod.toUpperCase()} •••• ${draft.cardNumber.slice(
              -4,
            )}`}
          />
        </View>

        <Button
          text="Enter PIN"
          onPress={() => navigation.navigate(ROUTES.SNAPSHOT_PIN, {draft})}
        />
      </ScrollView>
    </SafeInset>
  );
};

const SummaryRow = ({label, value}: {label: string; value: string}) => {
  const theme = useCareaTheme();

  return (
    <View style={styles.row}>
      <Text style={{color: theme.text_3}}>{label}</Text>
      <Text style={{color: theme.btn_bg, fontWeight: '600', flexShrink: 1}}>
        {value || '-'}
      </Text>
    </View>
  );
};

export default SnapshotReview;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: paddingSizes.medium,
    gap: Number(paddingSizes.small),
  },
  title: {
    fontSize: textSizes.medium,
    fontWeight: '700',
    marginBottom: paddingSizes.small,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Number(paddingSizes.small),
  },
});
