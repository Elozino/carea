import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Bubble,
  BubbleProps,
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat';
import {ArrowLeftIcon, TelephoneIcon} from '../../../assets/svg';
import ChatBox from '../../../components/ChatBox';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import {paddingSizes} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import useHideBottomBar from '../../../hooks/useHideBottomTab';

const Chat = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const {goBack} = useNavigation();
  const [messages, setMessages] = useState<IMessage[]>();
  const [inputMessage, setInputMessage] = useState<string>('');

  const handleInputText = (text: string) => {
    setInputMessage(text);
  };
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        // image: 'https://facebook.github.io/react/img/logo_og.png',
        // video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        // sent: true,
        // received: true,
        // pending: true,
      },
    ]);
  }, []);

  const submitHandler = () => {
    const message: IMessage = {
      _id: Math.random().toString(23).toString(),
      text: inputMessage,
      createdAt: new Date(),
      user: {_id: 1},
    };
    setMessages(prev => GiftedChat.append(prev, [message]));
    setInputMessage('');
  };

  const renderMessage = (props: BubbleProps<IMessage>) => {
    const {currentMessage} = props;

    if (currentMessage?.user?._id === 1) {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: theme.btn_bg,
              marginRight: paddingSizes.medium,
              marginBottom: paddingSizes.small,
            },
          }}
          textStyle={{
            right: {
              color: theme.btn_text,
            },
          }}
        />
      );
    } else {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: theme?.bg_2,
              marginLeft: paddingSizes.medium,
              marginBottom: paddingSizes.small,
            },
          }}
          textStyle={{
            left: {
              color: theme.btn_bg,
            },
          }}
        />
      );
    }
  };

  return (
    <SafeInset>
      <Topbar
        text={'BMW Store'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        rightIcon={
          <TouchableOpacity onPress={undefined}>
            <TelephoneIcon fill={theme.btn_bg} width={30} height={25} />
          </TouchableOpacity>
        }
        leftIconAction={goBack}
      />
      <GiftedChat
        messages={messages}
        user={{_id: 1}}
        renderMessage={renderMessage}
        minInputToolbarHeight={0}
        renderInputToolbar={() => null}
      />
      <ChatBox
        value={inputMessage}
        onChangeText={handleInputText}
        submitHandler={submitHandler}
      />
    </SafeInset>
  );
};

export default Chat;
