import Svg, { Path, SvgProps } from "react-native-svg";

type Props = {
  color?: string;
  size?: number | string;
};


const FemaleIcon = ({ color = "#000000", size = 24 }: Props) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FemaleIcon;
