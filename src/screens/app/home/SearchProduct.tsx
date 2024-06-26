import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../../types/navigation';
import {useNavigation} from '@react-navigation/native';
import {globalStyle, paddingSizes} from '../../../constants/styles';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {AppTextInput} from '../../../components';
import {ROUTES} from '../../../constants/enums';
import {FilterIcon, SearchIcon} from '../../../assets/svg';
import FlexTitle from '../../../components/FlexTitle';

const SearchProduct = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
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
    </View>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({});
