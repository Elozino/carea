import 'react-native-svg';

declare module 'react-native-svg' {
  interface SvgProps {
    xmlns?: string;
    xmlSpace?: string;
  }

  interface PathProps {
    style?: import('react-native').StyleProp<unknown>;
  }
}
