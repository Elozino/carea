import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchIcon} from '../../../assets/svg';
import NavTopTab from '../../../components/common/NavTopTab';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import {globalStyle} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Inbox = () => {
  const theme = useCareaTheme();
  const [activeTab, setActiveTab] = useState<'chats' | 'calls'>('chats');
  return (
    <SafeInset>
      <Topbar text={'Inbox'} rightIcon={<SearchIcon fill={theme?.btn_bg} />} />
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
      <Text>Inbox</Text>
    </SafeInset>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
