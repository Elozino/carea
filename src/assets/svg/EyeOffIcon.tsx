import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type EyeOffIconProps = {
  width?: number;
  height?: number;
  fill?: string;
};

const EyeOffIcon = ({
  width = 18,
  height = 18,
  fill = '#A8A8A8',
}: EyeOffIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2 12C3.7 8.5 7.3 6 12 6C16.7 6 20.3 8.5 22 12C20.3 15.5 16.7 18 12 18C7.3 18 3.7 15.5 2 12Z"
      stroke={fill}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={12} cy={12} r={3} stroke={fill} strokeWidth={1.8} />
    <Path
      d="M4 20L20 4"
      stroke={fill}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EyeOffIcon;
