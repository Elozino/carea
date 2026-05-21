import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import AppTextInput from '../../../components/ui/AppTextInput';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const maskCardNumber = (val: string) => {
  const digits = val.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
};

const AddCard = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  const [holder, setHolder] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const isValid =
    holder.trim().length > 0 &&
    number.replace(/\s/g, '').length === 16 &&
    /^\d{2}\/\d{2}$/.test(expiry) &&
    cvv.length === 3;

  const displayNumber = number || '●●●● ●●●● ●●●● ●●●●';

  return (
    <SafeInset>
      <Topbar
        text="Add New Card"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        keyboardShouldPersistTaps="handled">
        {/* Live card preview */}
        <View style={[styles.cardPreview, {backgroundColor: theme.btn_bg}]}>
          <Text style={[styles.cardNetwork, {color: theme.btn_text}]}>
            MASTERCARD
          </Text>
          <Text style={[styles.cardNumber, {color: theme.btn_text}]}>
            {displayNumber}
          </Text>
          <View style={styles.cardBottom}>
            <View>
              <Text style={[styles.cardSmallLabel, {color: theme.btn_text}]}>
                Card Holder
              </Text>
              <Text style={[styles.cardValue, {color: theme.btn_text}]}>
                {holder || 'FULL NAME'}
              </Text>
            </View>
            <View>
              <Text style={[styles.cardSmallLabel, {color: theme.btn_text}]}>
                Expires
              </Text>
              <Text style={[styles.cardValue, {color: theme.btn_text}]}>
                {expiry || 'MM/YY'}
              </Text>
            </View>
          </View>
        </View>

        <AppTextInput
          label="Card Holder"
          value={holder}
          onChangeText={setHolder}
        />
        <AppTextInput
          label="Card Number"
          value={maskCardNumber(number)}
          onChangeText={v => setNumber(v.replace(/\D/g, ''))}
          keyboardType="number-pad"
        />
        <View style={styles.row}>
          <View style={styles.half}>
            <AppTextInput
              label="Expiry Date (MM/YY)"
              value={expiry}
              onChangeText={v => {
                const clean = v.replace(/\D/g, '').slice(0, 4);
                setExpiry(
                  clean.length > 2
                    ? clean.slice(0, 2) + '/' + clean.slice(2)
                    : clean,
                );
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.half}>
            <AppTextInput
              label="CVV"
              value={cvv}
              onChangeText={v => setCvv(v.replace(/\D/g, '').slice(0, 3))}
              keyboardType="number-pad"
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.btnWrap}>
          <Button
            text="Add"
            disabled={!isValid}
            onPress={() => navigation.goBack()}
            style={styles.btn}
          />
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
  cardPreview: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 28,
    marginTop: 8,
  },
  cardNetwork: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: 'right',
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 3,
    textAlign: 'center',
    marginBottom: 24,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardSmallLabel: {
    fontSize: 10,
    opacity: 0.7,
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 13,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  half: {
    flex: 1,
  },
  btnWrap: {
    marginTop: 24,
  },
  btn: {
    borderRadius: 30,
  },
});

export default AddCard;
