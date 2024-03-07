import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const BottomSettingIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none">
    <Path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 19v-8M12 19.001v-14M7 19.002v-8"
      {...props}
    />
  </Svg>
);
