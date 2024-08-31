/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {FilterIcon, SearchIcon} from '../../../assets/svg';
import {AppTextInput} from '../../../components';
import FlexTitle from '../../../components/FlexTitle';
import SafeInset from '../../../components/layout/SafeInset';
import ProductListing from '../../../components/ProductListing';
import {ROUTES} from '../../../constants/enums';
import {getFontSize, paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';
import NotFound from '../../../components/common/NotFound';

const SearchProduct = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [total, setTotal] = useState(10);
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
      <FlexTitle
        title="Recent"
        btnTitle="Clear All"
        onPress={() => setTotal(0)}
      />
      {/* <View style={[styles.hairline, {borderColor: theme?.gray}]} /> */}
      {/* <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={Array.from({length: 12})}
        renderItem={({}) => (
          <FlexTitle
            title="Toyota"
            btnTitle={<XIcon fill={theme?.btn_bg} width={16} height={16} />}
            onPress={() => {}}
          />
        )}
      /> */}
      {/* <NotFound /> */}
      <FlatList
        data={Array.from({length: total})}
        renderItem={({item}) => <ProductListing item={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{flexGrow: 1}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          gap: getFontSize(10),
          paddingTop: Number(paddingSizes.medium) / 2,
          paddingBottom: Number(paddingSizes.medium),
          paddingHorizontal: paddingSizes.medium,
        }}
        ListEmptyComponent={NotFound}
      />
    </SafeInset>
  );
};

export default SearchProduct;
