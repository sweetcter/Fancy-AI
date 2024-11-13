import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { memo } from "react";
import CustomShadow from "../CustomShadow";

const TopicCard = memo(
  ({
    item,
  }: {
    item: {
      id: string;
      url: ImageSourcePropType | undefined;
      category: string;
    };
  }) => {
    return (
      <View className="relative rounded-[18px]">
        <CustomShadow radius={18} distance={10} offset={[9, 9]}>
          <Image
            source={item.url}
            className="w-fit rounded-[18px] overflow-hidden"
          ></Image>
          <View
            className="absolute flex flex-row justify-between items-center bottom-0 top-[66%] right-0 left-0 rounded-b-2xl"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.34)" }}
          >
            <Text className="text-white text-base w-[60%] ml-2 mb-14 font-bold">
              Start transforming into a pilot right now
            </Text>
            <View className="rounded-3xl overflow-hidden mr-1">
              <Text className="bg-black px-8 py-2 font-bold text-base text-white">
                Start
              </Text>
            </View>
          </View>
        </CustomShadow>
      </View>
    );
  }
);

export default TopicCard;
