/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VOICE_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {zegoConfig} from './data';
import {useNavigation} from '@react-navigation/native';

export default function VoiceCallPage() {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={zegoConfig.appID}
        appSign={zegoConfig.appSign}
        userID={'zino'} // userID can be something like a phone number or the user id on your own user system.
        userName={'elozino'}
        callID={'12345'} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VOICE_CALL_CONFIG,
          ringtoneConfig: {
            incomingCallFileName: 'ring_tone.mp3',
            outgoingCallFileName: 'ring_tone.mp3',
          },
          onCallEnd: (callID, reason, duration) => {
            console.log('duration: ', duration);
            console.log('reason: ', reason);
            console.log('callID: ', callID);
            goBack();
          },
          onOnlySelfInRoom: () => {
            goBack();
          },
          onHangUp: () => {
            goBack();
          },
          //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
          audioVideoViewConfig: {
            foregroundBuilder: ({userInfo}) => (
              <MyForeground userInfo={userInfo} />
            ),
          },
          avatarBuilder: avatar,
          notifyWhenAppRunningInBackgroundOrQuit: true,
          isIOSSandboxEnvironment: true,
          androidNotificationConfig: {
            channelID: 'ZegoUIKit',
            channelName: 'ZegoUIKit',
          },
        }}
      />
    </View>
  );
}

export const avatar = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1680844540129-48dacc7d5d88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtdyUyMGxvZ298ZW58MHx8MHx8fDA%3D',
        }}
      />
    </View>
  );
};

export const MyForeground = ({userInfo}) => {
  console.log('userInfo: ', userInfo);
  return <Text> I avatar </Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
