import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const BottomUserIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 32 40">
      <G filter="url(#a)">
        <Path
          fillRule="evenodd"
          d="M2 2h6v28H2zm2 26h2V4H4zm26.5.8-5.8 1.5-7.2-27.1 5.8-1.5zm-4.4-.9 1.9-.5-6.2-23.2-1.9.6zM9.9 2h6v28h-6zm2 26h2V4h-2z"
          style={{
            fill: 'white',
          }}
          {...props}
        />
      </G>
    </Svg>
  );
};

export default BottomUserIcon;
