/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Platform, View} from 'react-native';
import {SearchIcon} from '../../../assets/svg';
import NavTopTab from '../../../components/common/NavTopTab';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import {globalStyle, paddingSizes, textSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import ListItem from '../../../components/ListItem';
import NotFound from '../../../components/common/NotFound';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/src/types';
import {InboxStackParams} from '../../../types/navigation';
import {ROUTES} from '../../../constants/enums';

const Inbox = () => {
  const theme = useCareaTheme();
  const [activeTab, setActiveTab] = useState<'chats' | 'calls'>('chats');
  const {navigate} =
    useNavigation<NativeStackNavigationProp<InboxStackParams>>();
  return (
    <SafeInset>
      <Topbar
        text={'Inbox'}
        rightIcon={<SearchIcon stroke={theme?.btn_bg} />}
      />
      <View style={globalStyle.navTopTabContainer}>
        <NavTopTab
          title={'Chats'}
          style={{
            borderBottomColor:
              activeTab === 'chats' ? theme.btn_bg : theme?.gray,
          }}
          onPress={() => setActiveTab('chats')}
        />
        <NavTopTab
          title={'Calls'}
          style={{
            borderBottomColor:
              activeTab === 'calls' ? theme.btn_bg : theme?.gray,
          }}
          onPress={() => setActiveTab('calls')}
        />
      </View>
      <FlatList
        data={Array.from({length: 10})}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <ListItem
            navigateToCall={() => navigate(ROUTES.CALL)}
            activeTab={activeTab}
            navigateToScreen={() =>
              activeTab === 'calls' ? null : navigate(ROUTES.CHAT)
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={NotFound}
        contentContainerStyle={{
          paddingHorizontal: paddingSizes.medium,
          gap: textSizes.normal,
          paddingBottom: Platform.OS === 'ios' ? 70 : 100,
        }}
      />
    </SafeInset>
  );
};

export default Inbox;
