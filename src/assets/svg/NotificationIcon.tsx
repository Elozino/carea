import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const NotificationIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.fill ?? '#000'}
    strokeWidth={0}
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="-2.4 -2.4 28.8 28.8"
    {...props}>
    <G
      fill={props.fill ?? '#000'}
      fillRule="evenodd"
      stroke="none"
      clipRule="evenodd">
      <Path d="M8.874 18.693a.75.75 0 0 1 .75.75c0 .174.044.352.139.53.095.177.243.353.447.51.204.157.455.288.743.38.288.092.601.14.92.14.32 0 .632-.048.92-.14.288-.092.54-.223.744-.38.203-.157.351-.333.447-.51a1.11 1.11 0 0 0 .139-.53.75.75 0 1 1 1.5 0c0 .434-.111.856-.318 1.24-.206.382-.5.716-.853.988s-.763.48-1.203.621c-.44.14-.907.211-1.376.211-.468 0-.936-.07-1.375-.21-.44-.141-.85-.35-1.203-.622a3.125 3.125 0 0 1-.853-.988 2.61 2.61 0 0 1-.318-1.24.75.75 0 0 1 .75-.75Z" />
      <Path d="M8.29 2.37a8.316 8.316 0 0 1 7.193-.104l.204.095a6.778 6.778 0 0 1 3.935 6.153v1.31c0 1.054.23 2.095.673 3.05l.265.571c1.215 2.621-.368 5.685-3.21 6.21l-.135-.737.136.738-.16.03c-3.515.649-7.12.649-10.635 0-2.88-.533-4.403-3.719-3.01-6.295l.227-.418a7.068 7.068 0 0 0 .851-3.364V8.29a6.61 6.61 0 0 1 3.666-5.92Zm6.564 1.258a6.816 6.816 0 0 0-5.896.085 5.11 5.11 0 0 0-2.834 4.575V9.61a8.568 8.568 0 0 1-1.032 4.078l-.226.418a2.813 2.813 0 0 0 1.963 4.105c3.335.616 6.754.616 10.09 0l.16-.03a2.923 2.923 0 0 0 2.12-4.104l-.265-.57a8.75 8.75 0 0 1-.812-3.682v-1.31a5.278 5.278 0 0 0-3.064-4.792l-.204-.094Z" />
    </G>
  </Svg>
);
export default NotificationIcon;
