/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SafeInset from '../../../../components/layout/SafeInset';
import {Button} from '../../../../components/ui/Button';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../../types/navigation';
import {formatCurrency} from './mockData';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_SUCCESS'>;

const SnapshotSuccess = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();

  return (
    <SafeInset>
      <View style={styles.container}>
        <View style={[styles.iconWrap, {backgroundColor: theme.bg_2}]}>
          <Text style={{fontSize: 36}}>OK</Text>
        </View>
        <Text style={[styles.title, {color: theme.btn_bg}]}>Bid Won</Text>
        <Text style={{color: theme.text_3, textAlign: 'center'}}>
          Your winning bid of {formatCurrency(route.params.draft.offerAmount)}
          cleared the live auction after {route.params.draft.bidAttempts ||
            1}{' '}
          attempt(s). Checkout is confirmed and processing.
        </Text>
        <View style={styles.actions}>
          <Button
            text="Back To Home"
            onPress={() => navigation.navigate(ROUTES.HOME)}
          />
          <Button
            text="Join Another Auction"
            style={{backgroundColor: theme.gray}}
            onPress={() => navigation.navigate(ROUTES.PRODUCT_DETAILS)}
          />
        </View>
      </View>
    </SafeInset>
  );
};

export default SnapshotSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingSizes.large,
    gap: Number(paddingSizes.medium),
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: textSizes.medium_1,
    fontWeight: '700',
  },
  actions: {
    width: '100%',
    gap: Number(paddingSizes.small),
  },
});
