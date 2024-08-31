import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../types/navigation';
import SpecialOfferCard from '../../../components/SpecialOfferCard';
import NotFound from '../../../components/common/NotFound';
import {getFontSize} from '../../../constants/styles';

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
      <FlatList
        data={Array.from({length: 10})}
        renderItem={() => <SpecialOfferCard />}
        ListEmptyComponent={NotFound}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </SafeInset>
  );
};

export default SpecialOffer;

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: getFontSize(20),
    paddingVertical: getFontSize(20),
  },
});
