require('react-native-gesture-handler/jestSetup');

jest.mock('react-native-reanimated', () => {
  const {Image, ScrollView, Text, View} = require('react-native');

  const createAnimatedComponent = Component => Component;

  return {
    __esModule: true,
    default: {
      View,
      Text,
      Image,
      ScrollView,
      createAnimatedComponent,
    },
    View,
    Text,
    Image,
    ScrollView,
    createAnimatedComponent,
    useSharedValue: value => ({value}),
    useAnimatedStyle: updater => updater(),
    withSpring: value => value,
    withTiming: value => value,
    interpolateColor: (_value, _input, output) => output?.[0],
    interpolate: (_value, _input, output) => output?.[0] ?? 0,
    Extrapolate: {
      CLAMP: 'clamp',
    },
    SharedTransition: {
      custom: callback => callback,
    },
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('expo-blur', () => {
  const React = require('react');
  const {View} = require('react-native');

  return {
    __esModule: true,
    BlurView: ({children, ...props}) => React.createElement(View, props, children),
  };
});

jest.mock('expo-haptics', () => ({
  __esModule: true,
  notificationAsync: jest.fn(),
  NotificationFeedbackType: {
    Success: 'success',
  },
}));

jest.mock('react-native-gifted-chat', () => {
  const React = require('react');
  const {View} = require('react-native');

  const GiftedChat = ({children}) => React.createElement(View, null, children);
  GiftedChat.append = (previous = [], next = []) => [...next, ...previous];

  return {
    __esModule: true,
    GiftedChat,
    Bubble: ({children}) => React.createElement(View, null, children),
  };
});

jest.mock('@zegocloud/zego-uikit-prebuilt-call-rn', () => {
  const React = require('react');

  return {
    __esModule: true,
    default: {
      init: jest.fn().mockResolvedValue(undefined),
      requestSystemAlertWindow: jest.fn(),
      uninit: jest.fn().mockResolvedValue(undefined),
      useSystemCallingUI: jest.fn(),
    },
    GROUP_VIDEO_CALL_CONFIG: {},
    GROUP_VOICE_CALL_CONFIG: {},
    ONE_ON_ONE_VIDEO_CALL_CONFIG: {},
    ONE_ON_ONE_VOICE_CALL_CONFIG: {},
    ZegoCallInvitationDialog: () => null,
    ZegoInvitationType: {videoCall: 'videoCall'},
    ZegoUIKitPrebuiltCall: ({children}) =>
      React.createElement('ZegoUIKitPrebuiltCall', null, children),
  };
});

jest.mock('zego-zim-react-native', () => ({}));
jest.mock('zego-zpns-react-native', () => ({}));
