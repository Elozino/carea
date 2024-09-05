/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Platform, StyleSheet, View} from 'react-native';
import {SearchIcon} from '../../../assets/svg';
import NavTopTab from '../../../components/common/NavTopTab';
import NotFound from '../../../components/common/NotFound';
import SafeInset from '../../../components/layout/SafeInset';
import LeaveAReview from '../../../components/LeaveAReview';
import OrderCard from '../../../components/OrderCard';
import Topbar from '../../../components/Topbar';
import AppModal from '../../../components/ui/AppModal';
import {getFontSize, paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Orders = () => {
  const theme = useCareaTheme();
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const toggleModal = () => {
    setReviewModal(!reviewModal);
  };

  return (
    <>
      <SafeInset>
        <Topbar
          text={'My Orders'}
          rightIcon={<SearchIcon stroke={theme?.white} />}
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
              openModal={() => toggleModal()}
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
      </SafeInset>
      <AppModal
        visible={reviewModal}
        statusBarTranslucent={false}
        position={'bottom'}
        animationType={'slide'}>
        <LeaveAReview closeModal={toggleModal} />
      </AppModal>
    </>
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
