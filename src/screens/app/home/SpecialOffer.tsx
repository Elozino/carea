import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import Topbar from '../../../components/Topbar';
import {globalStyle} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';

const SpecialOffer = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Topbar
        text={'Special Offers'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg}  />}
        leftIconAction={goBack}
      />
      <Text>SearchProduct</Text>
    </View>
  );
}

export default SpecialOffer

const styles = StyleSheet.create({})