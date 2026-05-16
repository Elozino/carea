import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {WalletStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<WalletStackParams>;
type Route = RouteProp<WalletStackParams, 'WALLET_TOP_UP_SUCCESS'>;

const WalletTopUpSuccess = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const route = useRoute<Route>();
  const {amount} = route.params;

  return (
    <SafeInset>
      <View style={[styles.container, {backgroundColor: theme.bg_1}]}>
        <View style={[styles.iconCircle, {backgroundColor: theme.btn_bg}]}>
          <Text style={[styles.checkIcon, {color: theme.btn_text}]}>✓</Text>
        </View>
        <Text style={[styles.title, {color: theme.text_1}]}>
          Top Up Successful!
        </Text>
        <Text style={[styles.subtitle, {color: theme.text_3}]}>
          {amount} has been added to your E-Wallet successfully.
        </Text>
        <View style={styles.actions}>
          <Button
            text="Continue to manage"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: ROUTES.WALLET}],
              })
            }
            style={styles.btn}
          />
          <Button
            text="Cancel"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: ROUTES.WALLET}],
              })
            }
            style={[styles.btn, styles.ghostBtn, {borderColor: theme.btn_bg}]}
            textStyle={{color: theme.btn_bg}}
          />
        </View>
      </View>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  checkIcon: {
    fontSize: 48,
    fontWeight: '700',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  btn: {
    borderRadius: 30,
  },
  ghostBtn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
});

export default WalletTopUpSuccess;
