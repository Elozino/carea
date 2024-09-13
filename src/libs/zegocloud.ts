import ZegoUIKitPrebuiltCallService, {
  GROUP_VIDEO_CALL_CONFIG,
  GROUP_VOICE_CALL_CONFIG,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  ONE_ON_ONE_VOICE_CALL_CONFIG,
  ZegoInvitationType,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import * as ZIM from 'zego-zim-react-native';
import * as ZPNs from 'zego-zpns-react-native';
import {zegoConfig} from '../components/libs/zeego/data';
import {avatar} from '../components/libs/zeego/ZeegoCall';

export const zegoInit = async (userID = '1234', userName = 'zino') => {
  return ZegoUIKitPrebuiltCallService.init(
    zegoConfig.appID,
    zegoConfig.appSign,
    userID,
    userName,
    [ZIM, ZPNs],
    {
      ringtoneConfig: {
        incomingCallFileName: 'ring_tone.mp3',
        outgoingCallFileName: 'ring_tone.mp3',
      },
      requireConfig: data => {
        const callConfig =
          data.invitees.length > 1
            ? ZegoInvitationType.videoCall === data.type
              ? GROUP_VIDEO_CALL_CONFIG
              : GROUP_VOICE_CALL_CONFIG
            : ZegoInvitationType.videoCall === data.type
            ? ONE_ON_ONE_VIDEO_CALL_CONFIG
            : ONE_ON_ONE_VOICE_CALL_CONFIG;
        return {
          ...callConfig,
          turnOnCameraWhenJoining: false,
          turnOnMicrophoneWhenJoining: false,
          useSpeakerWhenJoining: true,
          hangUpConfirmInfo: {
            title: 'Hangup confirm',
            message: 'Do you want to hangup?',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Confirm',
          },
          audioVideoViewConfig: {
            foregroundBuilder: () => {
              return 'Ihsh';
            },
          },
        };
      },
      notifyWhenAppRunningInBackgroundOrQuit: true,
      isIOSSandboxEnvironment: true,
      androidNotificationConfig: {
        channelID: 'ZegoUIKit',
        channelName: 'ZegoUIKit',
      },
      avatarBuilder: avatar,
    },
  ).then(() => {
    ZegoUIKitPrebuiltCallService.requestSystemAlertWindow({
      message:
        'We need your consent for the following permissions in order to use the offline call function properly',
      allow: 'Allow',
      deny: 'Deny',
    });
  });
};
export const zegoUnInit = async () => {
  return ZegoUIKitPrebuiltCallService.uninit();
};
