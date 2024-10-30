import FemaleIcon from "@/assets/icons/FemaleIcon";
import MaleIcon from "@/assets/icons/MaleIcon";
import images from "@/assets/images";
import CustomHeader from "@/components/CustomHeader";
import CustomShadow from "@/components/CustomShadow";
import ProviderContent from "@/components/ProviderContent";
import TransparentItem from "@/components/TransparentItem";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

const topic = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ] as { id?: number }[];

  data.length % 2 !== 0 && data.push({ id: undefined });
  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="flatlist"
    >
      <CustomHeader title="Pilot"></CustomHeader>
      <View className="flex flex-row justify-center gap-0.5 items-center mt-3">
        <TouchableOpacity activeOpacity={0.7} className="overflow-hidden">
          <Text
            className="bg-black px-2 py-1.5 text-white rounded"
            style={{ fontFamily: "datdz" }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="border rounded border-black"
        >
          <LinearGradient
            colors={["#06b6d4", "#3b82f6"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ borderRadius: 4 }}
          >
            <View className="flex justify-center items-center h-8 w-8">
              <MaleIcon color="#FFFFFF" size={26} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="border rounded border-black"
        >
          <LinearGradient
            colors={["#06b6d4", "#3b82f6"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ borderRadius: 4 }}
          >
            <View className="flex justify-center items-center h-8 w-8">
              <FemaleIcon color="#FFFFFF" size={26} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View className="mt-[26px] pb-4 flex flex-row justify-center">
        <View
          className="flex flex-row
          justify-center gap-[19px] items-center
           flex-wrap"
        >
          {data.map((item, index) => {
            if (item.id === undefined) return <TransparentItem key={index} />;
            return (
              <View key={index} className="basis-[40%]">
                <CustomShadow distance={8} offset={[10, 6]}>
                  <View className="overflow-hidden w-[155px] h-[186px] rounded-md">
                    <Image source={images.bbnm} className="w-fit"></Image>
                  </View>
                </CustomShadow>
              </View>
            );
          })}
          <TransparentItem />
        </View>
      </View>
    </ProviderContent>
  );
};

export default topic;
