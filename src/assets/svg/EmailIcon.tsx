import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const EmailIcon = ({width = 20, height = 20}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    xmlSpace="preserve"
    viewBox="0 0 491.52 491.52">
    <Path
      d="M0 85.914h491.52v319.693H0z"
      style={{
        fill: '#f6c358',
      }}
    />
    <Path
      d="m245.76 217.258 245.76 188.346H0z"
      style={{
        fill: '#fcd462',
      }}
    />
    <Path
      d="M245.76 291.673 0 85.916h491.52z"
      style={{
        fill: '#dc8744',
      }}
    />
    <Path
      d="M245.76 274.261 0 85.916h491.52z"
      style={{
        fill: '#fcd462',
      }}
    />
  </Svg>
);
export default EmailIcon;
