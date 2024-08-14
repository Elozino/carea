import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FilterIcon, SearchIcon} from '../../../assets/svg';
import {AppTextInput} from '../../../components';
import FlexTitle from '../../../components/FlexTitle';
import SafeInset from '../../../components/layout/SafeInset';
import {ROUTES} from '../../../constants/enums';
import {paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';

const SearchProduct = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <SafeInset style={{backgroundColor: theme.bg_1}}>
      <AppTextInput
        placeholder="Search Product"
        leftIcon={<SearchIcon />}
        rightIcon={<FilterIcon />}
        style={{
          marginHorizontal: paddingSizes.medium,
          marginTop: paddingSizes.large,
          marginBottom: paddingSizes.small,
        }}
        editable={true}
        onPress={() => navigate(ROUTES.SEARCH_PRODUCT)}
      />
      <FlexTitle title="Recent" btnTitle="Clear All" onPress={undefined} />
      <Text>SearchProduct</Text>
    </SafeInset>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({});
