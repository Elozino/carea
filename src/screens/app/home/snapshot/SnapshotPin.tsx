/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../../assets/svg';
import SafeInset from '../../../../components/layout/SafeInset';
import Topbar from '../../../../components/Topbar';
import NumericKeypad from '../../../../components/ui/NumericKeypad';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_PIN'>;

const SnapshotPin = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const [pin, setPin] = useState('');

  const appendPin = (digit: string) => {
    setPin(prev => {
      if (prev.length >= 4) {
        return prev;
      }
      return `${prev}${digit}`;
    });
  };

  const deletePin = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <SafeInset>
      <Topbar
        text="Enter Your PIN"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <View style={styles.container}>
        <Text style={[styles.title, {color: theme.btn_bg}]}>
          Confirm Purchase
        </Text>
        <Text style={{color: theme.text_3, textAlign: 'center'}}>
          Enter your 4-digit PIN to complete this order.
        </Text>

        <View style={styles.pinRow}>
          {Array.from({length: 4}).map((_, index) => (
            <View
              key={index.toString()}
              style={[
                styles.pinDot,
                {
                  backgroundColor:
                    index < pin.length ? theme.btn_bg : theme.bg_2,
                },
              ]}
            />
          ))}
        </View>

        <NumericKeypad
          onDigitPress={appendPin}
          onDeletePress={deletePin}
          onSubmitPress={() =>
            navigation.replace(ROUTES.SNAPSHOT_SUCCESS, {
              draft: {
                ...route.params.draft,
                pin,
              },
            })
          }
          submitLabel="Confirm"
          disableSubmit={pin.length !== 4}
        />
      </View>
    </SafeInset>
  );
};

export default SnapshotPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSizes.medium,
    gap: Number(paddingSizes.medium),
  },
  title: {
    textAlign: 'center',
    fontSize: textSizes.medium_1,
    fontWeight: '700',
  },
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Number(paddingSizes.small),
    marginVertical: paddingSizes.small,
  },
  pinDot: {
    width: 20,
    height: 20,
  },
});
