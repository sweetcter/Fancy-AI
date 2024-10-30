import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

type Props = {
  size?: number | string;
};

const UserIcon = ({size = 32 }: Props) => (
  <Svg viewBox="0 0 32 32" width={size} height={size} fill="none">
    <Path
      d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z"
      fill={"#BBDEFB"}
    />
    <Circle cx="16" cy="9" r="8" fill={"#E3F2FD"} />
  </Svg>
);

export default UserIcon;
