import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ArrowLeftIcon} from '../../../assets/svg';
import Topbar from '../../../components/Topbar';
import NotificationCard from '../../../components/cards/NotificationCard';
import {globalStyle, paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';

const Notification = () => {
  const theme = useCareaTheme();
  const {goBack} = useNavigation();
  useHideBottomBar();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
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
    </View>
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
