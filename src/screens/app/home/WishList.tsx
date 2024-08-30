import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ArrowLeftIcon} from '../../../assets/svg';
import SafeInset from '../../../components/layout/SafeInset';
import ProductListing from '../../../components/ProductListing';
import Topbar from '../../../components/Topbar';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';

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
      <ProductListing />
    </SafeInset>
  );
};

export default WishList;
