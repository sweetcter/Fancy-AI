import { View, Text } from "react-native";
import React from "react";

const TransparentItem = () => {
  return <View className={`pointer-events-none opacity-0 `}></View>;
};

export default TransparentItem;
