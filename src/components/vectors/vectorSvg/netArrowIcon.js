import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const NextArrorwIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={8}
    fill="none"
    {...props}>
    <Path
      stroke="#CB8AFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.5 7 3-3-3-3"
    />
  </Svg>
);
