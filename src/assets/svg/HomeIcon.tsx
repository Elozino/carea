import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HomeIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={props.fill ?? '#000'}
      fillRule="evenodd"
      d="m20.479 7.578-5.386-4.453a4.814 4.814 0 0 0-6.186 0L3.521 7.578C2.551 8.381 2 9.598 2 10.866v8.008C2 20.542 3.286 22 5 22h2a3 3 0 0 0 3-3v-3.315c0-.68.504-1.126 1-1.126h2c.496 0 1 .445 1 1.126V19a3 3 0 0 0 3 3h2c1.714 0 3-1.458 3-3.126v-8.008c0-1.269-.55-2.485-1.521-3.288Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeIcon;
