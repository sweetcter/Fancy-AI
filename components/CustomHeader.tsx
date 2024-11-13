import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CustomHeaderProps = {
  title: string;
  RightIcon?: React.ReactNode;
};

const CustomHeader = ({ title, RightIcon }: CustomHeaderProps) => {
  return (
    <View className="mt-[45px] flex flex-row items-center mx-8 justify-between">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          router.back();
        }}
        hitSlop={10}
      >
        <Entypo
          name="chevron-thin-left"
          size={28}
          color="black"
          className="px-3 py-2 bg-white"
        />
      </TouchableOpacity>
      <Text className="font-bold text-3xl">{title}</Text>
      {RightIcon}
      {!RightIcon && <Text className="text-transparent">hehe</Text>}
    </View>
  );
};

export default CustomHeader;
