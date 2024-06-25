import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 20}
    height={props.height ?? 20}
    {...props}>
    <Path
      stroke={props.fill ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 6a5 5 0 0 1 5 5m.659 5.655L21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </Svg>
);
export default SearchIcon;
