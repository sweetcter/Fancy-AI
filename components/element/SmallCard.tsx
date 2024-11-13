import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { memo } from "react";
import CustomShadow from "../CustomShadow";

const SmallCard = memo(
  ({
    item,
    isTag,
  }: {
    item: {
      id: string;
      url: ImageSourcePropType | undefined;
      category: string;
    };
    isTag: boolean;
  }) => {
    return (
      <View className="relative rounded-xl mb-3 ml-3 basis-[40%]">
        <CustomShadow radius={20} distance={10} offset={[7, 7]}>
          <Image source={item.url} className="rounded-xl w-fit"></Image>
          
          {isTag && (
            <View className="absolute top-1 right-1 overflow-hidden rounded-2xl">
              <Text className="font-semibold text-[10px] bg-[#222] text-white px-3 py-1">
                {item.category}
              </Text>
            </View>
          )}
        </CustomShadow>
      </View>
    );
  }
);

export default SmallCard;
