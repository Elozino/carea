/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ArrowLeftIcon} from '../../../assets/svg';
import SafeInset from '../../../components/layout/SafeInset';
import ProductListing from '../../../components/ProductListing';
import Topbar from '../../../components/Topbar';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {FlatList} from 'react-native';
import NotFound from '../../../components/common/NotFound';
import {getFontSize, paddingSizes} from '../../../constants/styles';

const WishList = () => {
  const theme = useCareaTheme();
  const {goBack} = useNavigation();
  useHideBottomBar();
  return (
    <SafeInset>
      <Topbar
        text={'My Wishlist'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <FlatList
        data={Array.from({length: 9})}
        renderItem={({}) => <ProductListing />}
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

export default WishList;
