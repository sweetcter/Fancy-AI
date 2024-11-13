import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { memo } from "react";
import CustomShadow from "../CustomShadow";
import { router } from "expo-router";
import { paths } from "@/constants/router";

const { width, height } = Dimensions.get("window");

const LargeCard = memo(
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
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.navigate(paths.template(item.id))}
      >
        <View className="relative rounded-xl ml-2 mb-4">
          <CustomShadow radius={20} distance={10} offset={[9, 9]} opacity={1}>
            <Image
              source={item.url}
              className="rounded-xl overflow-hidden"
              style={{
                width: width * 0.8,
                height: height * 0.6,
              }}
              resizeMode="cover"
            ></Image>
            <View className="absolute top-2 right-1 overflow-hidden rounded-3xl">
              <Text className=" font-semibold text-xl bg-[#222] text-white px-3 py-1">
                {item.category}
              </Text>
            </View>
          </CustomShadow>
        </View>
      </TouchableOpacity>
    );
  }
);

export default LargeCard;
