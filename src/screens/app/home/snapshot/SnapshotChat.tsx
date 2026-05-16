/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ArrowLeftIcon} from '../../../../assets/svg';
import ChatBox from '../../../../components/ChatBox';
import SafeInset from '../../../../components/layout/SafeInset';
import Topbar from '../../../../components/Topbar';
import {Button} from '../../../../components/ui/Button';
import {ROUTES} from '../../../../constants/enums';
import {paddingSizes, textSizes} from '../../../../constants/styles';
import useCareaTheme from '../../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../../hooks/useHideBottomTab';
import {HomeStackParams} from '../../../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParams, 'SNAPSHOT_CHAT'>;

const SnapshotChat = ({navigation, route}: Props) => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([
    'Hi, this BMW M4 Series is still available.',
    'Great. Can you work with a lower offer?',
  ]);

  const context = useMemo(
    () => ({
      productName: route.params.productName,
      price: route.params.price,
    }),
    [route.params.price, route.params.productName],
  );

  const sendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }

    setMessages(prev => [...prev, inputMessage.trim()]);
    setInputMessage('');
  };

  return (
    <SafeInset>
      <Topbar
        text="BMW Store"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={navigation.goBack}
      />
      <View style={{paddingHorizontal: paddingSizes.medium, marginBottom: 10}}>
        <Text style={[styles.heading, {color: theme.btn_bg}]}>
          {context.productName}
        </Text>
        <Text style={{color: theme.text_3}}>
          Auction ask is {context.price}. Move fast once bidding opens.
        </Text>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: paddingSizes.medium,
          gap: Number(paddingSizes.small),
          paddingBottom: paddingSizes.medium,
        }}>
        {messages.map((message, index) => {
          const isMine = index % 2 === 1;
          return (
            <View
              key={`${message}-${index}`}
              style={[
                styles.bubble,
                {
                  alignSelf: isMine ? 'flex-end' : 'flex-start',
                  backgroundColor: isMine ? theme.btn_bg : theme.bg_2,
                },
              ]}>
              <Text style={{color: isMine ? theme.btn_text : theme.btn_bg}}>
                {message}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.footerActions}>
        <Button
          text="Open Live Auction"
          onPress={() => navigation.navigate(ROUTES.SNAPSHOT_OFFER, context)}
        />
      </View>
      <ChatBox
        value={inputMessage}
        onChangeText={setInputMessage}
        submitHandler={sendMessage}
      />
    </SafeInset>
  );
};

export default SnapshotChat;

const styles = StyleSheet.create({
  heading: {
    fontSize: textSizes.medium,
    fontWeight: '700',
  },
  bubble: {
    maxWidth: '82%',
    borderRadius: 14,
    paddingHorizontal: paddingSizes.medium,
    paddingVertical: paddingSizes.small,
  },
  footerActions: {
    paddingHorizontal: paddingSizes.medium,
    marginBottom: paddingSizes.small,
  },
});
