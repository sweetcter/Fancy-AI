import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { memo } from "react";
import CustomShadow from "../CustomShadow";
import { Feather } from "@expo/vector-icons";
import images from "@/assets/images";

const ProfileCard = memo(
  ({
    item,
    index,
  }: {
    item: {
      name: string;
    };
    index: number;
  }) => {
    return (
      <View key={index} className="rounded-lg relative">
        <CustomShadow offset={[9, 7]} radius={12} opacity={0.7} distance={8}>
          <Image source={images.bbnm} className="w-fit  rounded-lg"></Image>
        </CustomShadow>
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-red-400 top-1 right-1 rounded-md flex justify-center items-center absolute w-[30px] h-[30px]"
        >
          <Feather name="trash-2" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
);

export default ProfileCard;
