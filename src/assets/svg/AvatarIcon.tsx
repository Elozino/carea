import * as React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

const AvatarIcon = ({width = 20, height = 20}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    xmlSpace="preserve"
    viewBox="0 0 100 100">
    <Path d="M80 71.2V74c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6v-2.8c0-7.3 8.5-11.7 16.5-15.2.3-.1.5-.2.8-.4.6-.3 1.3-.3 1.9.1C42.4 57.8 46.1 59 50 59c3.9 0 7.6-1.2 10.8-3.2.6-.4 1.3-.4 1.9-.1.3.1.5.2.8.4 8 3.4 16.5 7.8 16.5 15.1z" />
    <Ellipse cx={50} cy={36.5} rx={14.9} ry={16.5} />
  </Svg>
);
export default AvatarIcon;
