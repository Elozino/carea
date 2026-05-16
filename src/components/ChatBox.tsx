import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {GalleryIcon, MicIcon} from '../assets/svg';
import SendIcon from '../assets/svg/SendIcon';
import {paddingSizes, textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import * as Haptics from 'expo-haptics';

interface ChatBoxProps {
  value: string;
  onChangeText: (text: string) => void;
  submitHandler: () => void;
}

const ChatBox = ({value, onChangeText, submitHandler}: ChatBoxProps) => {
  const theme = useCareaTheme();

  return (
    <View
      style={[styles.chatBoxContainer, {marginBottom: paddingSizes.medium}]}>
      <View style={[styles.chatContainer, {backgroundColor: theme.btn_bg1}]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Message..."
          style={styles.textInputContainer}
        />
        <Pressable>
          <GalleryIcon width={24} height={24} stroke={theme.btn_bg} />
        </Pressable>
      </View>
      {value.length ? (
        <Pressable
          onPress={submitHandler}
          style={[styles.micIconWrapper, {backgroundColor: theme.btn_bg}]}>
          <SendIcon width={22} height={22} fill={theme.btn_text} />
        </Pressable>
      ) : (
        <Pressable
          onPress={() =>
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
          }
          style={[styles.micIconWrapper, {backgroundColor: theme.btn_bg}]}>
          <MicIcon width={22} height={22} fill={theme.btn_text} />
        </Pressable>
      )}
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  chatBoxContainer: {
    paddingHorizontal: paddingSizes.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: textSizes.small,
  },
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingHorizontal: paddingSizes.small,
    height: 48,
    borderRadius: textSizes.small,
  },
  textInputContainer: {
    flex: 1,
    paddingVertical: 0,
  },
  micIconWrapper: {
    borderRadius: 100,
    backgroundColor: 'red',
    padding: paddingSizes.small,
  },
});
