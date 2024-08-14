import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import Topbar from '../../../components/Topbar';
import NotificationCard from '../../../components/cards/NotificationCard';
import SafeInset from '../../../components/layout/SafeInset';
import {paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';

const Notification = () => {
  const theme = useCareaTheme();
  const {goBack} = useNavigation();
  useHideBottomBar();
  return (
    <SafeInset>
      <Topbar
        text={'Notification'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <FlatList
        data={Array(20)}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <NotificationCard />}
        contentContainerStyle={[styles.cardContainer]}
      />
    </SafeInset>
  );
};

export default Notification;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: paddingSizes.medium,
    gap: 16,
    paddingVertical: paddingSizes.medium,
  },
});
