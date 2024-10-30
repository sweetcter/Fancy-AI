import { View, Text } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

type Props = {
  distance?: number;
  offset?: [number | string, number | string];
  children: React.ReactNode;
  color?: string;
  radius?: number;
  opacity?: number;
};

const CustomShadow = ({
  children,
  distance = 4,
  offset = [4, 4],
  color = "#333333",
  radius = 4,
  opacity = 0.8,
}: Props) => {
  return (
    <Shadow
      distance={distance}
      offset={offset}
      corners={{
        topStart: false,
        bottomStart: true,
        bottomEnd: true,
        topEnd: true,
      }}
      startColor="#00000030" 
      endColor="#00000000" 
      sides={{ start: true, end: true, bottom: true, top: true }}
      style={{
        borderRadius: radius,
        shadowColor: color,
        shadowOpacity: opacity,
      }}
    >
      {children}
    </Shadow>
  );
};

export default CustomShadow;
