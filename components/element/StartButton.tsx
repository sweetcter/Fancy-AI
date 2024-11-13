import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const StartButton = () => {
  return (
    <LinearGradient
      colors={["#FFE079", "#FFAFF7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ borderRadius: 4 }}
      className="rounded-md "
    >
      <TouchableOpacity>
        <Text className="text text-xl font-bold px-[33px] py-[13px]">
          Continute
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default StartButton;
