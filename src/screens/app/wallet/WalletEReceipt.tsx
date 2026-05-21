import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import ReceiptRow from '../../../components/ui/ReceiptRow';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {WalletStackParams} from '../../../types/navigation';
import {IMAGES} from '../../../constants/images';

type Nav = NativeStackNavigationProp<WalletStackParams>;
type Route = RouteProp<WalletStackParams, 'WALLET_RECEIPT'>;

const BARCODE_BARS = Array.from({length: 60}, (_, i) => ({
  width: i % 5 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
  id: i,
}));

const WalletEReceipt = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const route = useRoute<Route>();
  const {transaction} = route.params;
  const receipt = transaction.receiptData;

  return (
    <SafeInset>
      <Topbar
        text="E-Receipt"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}>
        {/* Barcode */}
        <View style={[styles.barcodeCard, {backgroundColor: theme.bg_2}]}>
          <View style={styles.barcodeWrap}>
            {BARCODE_BARS.map(bar => (
              <View
                key={bar.id}
                style={[
                  styles.barcodeBar,
                  {width: bar.width, backgroundColor: theme.text_1},
                ]}
              />
            ))}
          </View>
          <Text style={[styles.barcodeRef, {color: theme.text_3}]}>
            {receipt?.reference ?? transaction.id}
          </Text>
        </View>

        {/* Product image */}
        {transaction.imageKey && (
          <Image
            source={IMAGES.car}
            style={styles.productImage}
            resizeMode="cover"
          />
        )}

        {/* Receipt details */}
        <View style={[styles.detailCard, {backgroundColor: theme.bg_2}]}>
          {receipt ? (
            <>
              <ReceiptRow label="Product" value={receipt.productName} />
              <View style={[styles.divider, {backgroundColor: theme.bg_1}]} />
              <ReceiptRow label="Seller Price" value={receipt.sellerPrice} />
              <ReceiptRow label="Winning Bid" value={receipt.bidAmount} />
              <ReceiptRow label="Shipping" value={receipt.shipping} />
              <ReceiptRow label="Color" value={receipt.color} />
              <View style={[styles.divider, {backgroundColor: theme.bg_1}]} />
              <ReceiptRow label="Date" value={receipt.date} />
              <ReceiptRow label="Reference" value={receipt.reference} />
            </>
          ) : (
            <>
              <ReceiptRow label="Type" value="Wallet Top Up" />
              <ReceiptRow label="Amount" value={transaction.amount} />
              <ReceiptRow label="Date" value={transaction.subLabel} />
              <ReceiptRow label="Transaction ID" value={transaction.id} />
            </>
          )}
        </View>
      </ScrollView>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  barcodeCard: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  barcodeWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 60,
    gap: 1,
  },
  barcodeBar: {
    height: '100%',
    borderRadius: 1,
  },
  barcodeRef: {
    marginTop: 10,
    fontSize: 12,
    letterSpacing: 2,
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 16,
  },
  detailCard: {
    borderRadius: 16,
    padding: 20,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
});

export default WalletEReceipt;
