/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {FlatList, Platform, StyleSheet, View} from 'react-native';
import NavTopTab from '../../../components/common/NavTopTab';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import {getFontSize, paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import NotFound from '../../../components/common/NotFound';
import OrderCard from '../../../components/OrderCard';
// import LeaveAReview from '../../../components/LeaveAReview';
import {SearchIcon} from '../../../assets/svg';
// import CustomBottomSheetModal from '../../../components/libs/CustomBottomSheetModal';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const Orders = () => {
  const theme = useCareaTheme();
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetModalRef?.current?.snapToIndex(0);
  };

  const closeModal = () => {
    bottomSheetModalRef?.current?.snapToIndex(-1);
  };
  return (
    <SafeInset>
      <Topbar
        text={'My Orders'}
        rightIcon={<SearchIcon fill={theme?.btn_bg} />}
      />
      <View style={styles.navTopTabContainer}>
        <NavTopTab
          title={'Active'}
          style={{
            borderBottomColor:
              activeTab === 'active' ? theme.btn_bg : theme?.gray,
          }}
          onPress={() => setActiveTab('active')}
        />
        <NavTopTab
          title={'Completed'}
          style={{
            borderBottomColor:
              activeTab === 'completed' ? theme.btn_bg : theme?.gray,
          }}
          onPress={() => setActiveTab('completed')}
        />
      </View>
      <FlatList
        data={Array.from({length: 10})}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => (
          <OrderCard
            isCompleted={activeTab === 'completed'}
            openModal={() => {}}
          />
        )}
        ListEmptyComponent={<NotFound text={"You don't have an order yet"} />}
        contentContainerStyle={{
          padding: paddingSizes.medium,
          gap: getFontSize(15),
          paddingBottom: Platform.OS === 'ios' ? 70 : 100,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      />
      {/* <CustomBottomSheetModal snapPoint={['67%']} ref={bottomSheetModalRef}>
        <LeaveAReview closeModal={closeModal} />
      </CustomBottomSheetModal> */}
    </SafeInset>
  );
};

export default Orders;

const styles = StyleSheet.create({
  navTopTabContainer: {
    flexDirection: 'row',
    marginBottom: paddingSizes.medium,
    paddingHorizontal: paddingSizes.medium,
  },
});
