import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const NotificationIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#03045E"
        strokeLinejoin="round"
        d="M9.5 19H5.617a1 1 0 0 1-.893-1.447l.854-1.708A3.997 3.997 0 0 0 6 14.056V11c0-2 1-6 6-6s6 4 6 6v3.056c0 .621.145 1.233.422 1.789l.854 1.708A1 1 0 0 1 18.382 19H14.5m-5 0c0 2 1 3 2.5 3s2.5-1 2.5-3m-5 0h5"
        {...props}
      />
      <Path
        stroke="#03045E"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5V3"
        {...props}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" {...props} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NotificationIcon;
