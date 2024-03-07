import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LogoutIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke="#EB5757"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.315 7.914h8.529M3.388 9.98 1.314 7.914 3.388 5.85M5.162 11.096c.234 2.535 1.183 3.456 4.958 3.456 5.03 0 5.03-1.636 5.03-6.552 0-4.916 0-6.552-5.03-6.552-3.775 0-4.724.92-4.958 3.457"
    />
  </Svg>
);
