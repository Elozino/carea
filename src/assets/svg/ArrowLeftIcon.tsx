import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeftIcon = (props: SvgProps) => {
  const defaultSize = 16; // Set a default size for width and height
  const scaleFactor = 2; // Scale the icon by a factor of 2
  const width = typeof props.width === 'number' ? props.width : defaultSize;
  const height = typeof props.height === 'number' ? props.height : defaultSize;

  const calculatedWidth = width * scaleFactor;
  const calculatedHeight = height * scaleFactor;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={calculatedWidth}
      height={calculatedHeight}
      {...props}>
      <Path
        stroke={props.fill ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12h16M4 12l4-4m-4 4 4 4M4 12h16M4 12l4-4m-4 4 4 4"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
