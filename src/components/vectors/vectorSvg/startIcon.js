import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const StarIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.045 2.822c.732-1.763 3.178-1.763 3.91 0l.51 1.228c.3.722.957 1.222 1.72 1.309l1.423.16c1.796.204 2.538 2.46 1.226 3.73l-1.207 1.169a2.197 2.197 0 0 0-.621 2.002l.291 1.476c.37 1.869-1.632 3.28-3.212 2.265l-.954-.613a2.086 2.086 0 0 0-2.262 0l-.954.613c-1.58 1.015-3.581-.396-3.212-2.265l.291-1.476a2.197 2.197 0 0 0-.62-2.002L2.165 9.249c-1.312-1.27-.57-3.526 1.226-3.73l1.422-.16a2.129 2.129 0 0 0 1.721-1.31l.51-1.227Z"
      {...props}
    />
  </Svg>
);
