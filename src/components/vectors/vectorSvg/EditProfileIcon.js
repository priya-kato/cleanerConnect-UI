
import Svg, {
    Path,
  } from "react-native-svg";

export const EditProfileIcon = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <Path
        stroke="#CB8AFF"
        d="M12.63 3.592c-1.111.37-2.592-1.11-2.222-2.222m-.09.09L7.924 3.854A8.12 8.12 0 0 0 5.79 7.626l-.116.463a.197.197 0 0 0 .239.238l.462-.115a8.12 8.12 0 0 0 3.772-2.136l2.394-2.394a1.571 1.571 0 1 0-2.222-2.222Z"
      />
      <Path
        stroke="#CB8AFF"
        strokeLinecap="round"
        d="M7 1c-.682 0-1.364.078-2.033.235a5.008 5.008 0 0 0-3.732 3.732 8.903 8.903 0 0 0 0 4.066 5.008 5.008 0 0 0 3.732 3.732 8.904 8.904 0 0 0 4.066 0 5.008 5.008 0 0 0 3.732-3.732C12.922 8.364 13 7.683 13 7"
      />
    </Svg>
  );