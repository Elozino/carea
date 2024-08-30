import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FilterIcon, SearchIcon} from '../../../assets/svg';
import {AppTextInput} from '../../../components';
import FlexTitle from '../../../components/FlexTitle';
import SafeInset from '../../../components/layout/SafeInset';
import ProductListing from '../../../components/ProductListing';
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
      {/* <View style={[styles.hairline, {borderColor: theme?.gray}]} /> */}
      {/* <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={Array.from({length: 12})}
        renderItem={({item}) => (
          <FlexTitle
            title="Toyota"
            btnTitle={<XIcon fill={theme?.btn_bg} width={16} height={16} />}
            onPress={undefined}
          />
        )}
      /> */}
      {/* <NotFound /> */}
      <ProductListing />
    </SafeInset>
  );
};

export default SearchProduct;
