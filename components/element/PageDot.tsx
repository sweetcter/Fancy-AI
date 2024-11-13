import React from "react";
import { Text, View } from "react-native";

const PageDot = () => {
  return (
    <View className="flex flex-row gap-2">
      <View className="rounded-2xl overflow-hidden">
        <Text className="bg-black w-[24px] h-[10px]"></Text>
      </View>
      <View className="rounded-full overflow-hidden">
        <Text className="bg-white w-[10px] h-[10px]"></Text>
      </View>
    </View>
  );
};

export default PageDot;
