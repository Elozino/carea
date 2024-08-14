import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';

const SpecialOffer = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <SafeInset>
      <Topbar
        text={'Special Offers'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <Text>SearchProduct</Text>
    </SafeInset>
  );
};

export default SpecialOffer;

const styles = StyleSheet.create({});
