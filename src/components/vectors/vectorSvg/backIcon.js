import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const BackArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#373737"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.781 7.809h16.875M7.588 14.586S.78 10.918.78 7.81c0-3.11 6.807-6.779 6.807-6.779"
      {...props}

    />
  </Svg>
)