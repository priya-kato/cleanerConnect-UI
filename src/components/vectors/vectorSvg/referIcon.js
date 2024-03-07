import Svg, {Defs, Path} from 'react-native-svg';

export const ReferIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    viewBox="0 0 14 14"
    {...props}>
    <Path
      stroke="#CB8AFF"
      d="M.91 4.967a5.008 5.008 0 0 1 3.73-3.732 8.902 8.902 0 0 1 4.067 0 5.008 5.008 0 0 1 3.732 3.732 8.904 8.904 0 0 1 0 4.066 5.008 5.008 0 0 1-3.732 3.732 8.902 8.902 0 0 1-4.066 0A5.007 5.007 0 0 1 .909 9.033a8.902 8.902 0 0 1 0-4.066Z"
      {...props}
    />
    <Path
      stroke="#CB8AFF"
      strokeLinecap="round"
      d="M4.593 4.92h2.774M4.593 9.08h2.08M4.593 7h4.16"
      {...props}
    />
  </Svg>
);
