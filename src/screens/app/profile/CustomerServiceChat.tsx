import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import ChatBox from '../../../components/ChatBox';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ProfileStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

type Message = {id: string; text: string; fromUser: boolean; time: string};

const now = () => {
  const d = new Date();
  return d.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
};

const SEED_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Hello! How can I help you today?',
    fromUser: false,
    time: '09:00 AM',
  },
  {
    id: '2',
    text: 'I can assist with orders, payments, and account issues.',
    fromUser: false,
    time: '09:00 AM',
  },
];

const CustomerServiceChat = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
  const [input, setInput] = useState('');
  const listRef = useRef<FlatList>(null);

  const send = () => {
    const text = input.trim();
    if (!text) {
      return;
    }
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      fromUser: true,
      time: now(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for reaching out! Our team will get back to you shortly.',
        fromUser: false,
        time: now(),
      };
      setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  return (
    <SafeInset>
      <Topbar
        text="Customer Service"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}>
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({item}: {item: Message}) => (
            <View
              style={[
                styles.bubbleRow,
                item.fromUser ? styles.bubbleRight : styles.bubbleLeft,
              ]}>
              <View
                style={[
                  styles.bubble,
                  {
                    backgroundColor: item.fromUser ? theme.btn_bg : theme.bg_2,
                  },
                ]}>
                <Text
                  style={[
                    styles.bubbleText,
                    {color: item.fromUser ? theme.btn_text : theme.text_1},
                  ]}>
                  {item.text}
                </Text>
              </View>
              <Text style={[styles.time, {color: theme.text_3}]}>
                {item.time}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            listRef.current?.scrollToEnd({animated: true})
          }
        />
        <ChatBox value={input} onChangeText={setInput} submitHandler={send} />
      </KeyboardAvoidingView>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexGrow: 1,
  },
  bubbleRow: {
    marginBottom: 12,
    maxWidth: '75%',
  },
  bubbleLeft: {
    alignSelf: 'flex-start',
  },
  bubbleRight: {
    alignSelf: 'flex-end',
  },
  bubble: {
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  bubbleText: {
    fontSize: 15,
    lineHeight: 21,
  },
  time: {
    fontSize: 11,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
});

export default CustomerServiceChat;
