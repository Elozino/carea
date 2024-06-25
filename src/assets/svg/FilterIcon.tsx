import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FilterIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 30}
    height={props.height ?? 25}
    {...props}>
    <Path
      stroke={props.fill ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7h16M7 12h10m-6 5h2"
    />
  </Svg>
);
export default FilterIcon;
