import UserIcon from "@/assets/icons/UserIcon";
import images from "@/assets/images";
import clsx from "clsx";
import { useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import ProviderContent from "@/components/ProviderContent";
import CustomShadow from "@/components/CustomShadow";
import CustomHeader from "@/components/CustomHeader";
import TransparentItem from "@/components/TransparentItem";

const data: { name: string; id: number }[] = [
  {
    id: 1,
    name: "Dream jobs",
  },
  {
    id: 2,
    name: "World Adventures",
  },
  {
    id: 3,
    name: "Fashion",
  },
  {
    id: 4,
    name: "Wedding",
  },
];

const swapData = [
  { name: "hehe" },
  { name: "hehe2" },
  { name: "hehe3" },
  { name: "hehe4" },
  { name: "hehe5" },
  { name: "hehe6" },
  { name: "hehe7" },
  { name: "hehe8" },
  { name: "hehe9" },
  { name: "hehe10" },
  { name: "hehe11" },
  { name: "hehe12" },
  { name: "hehe13" },
  { name: "hehe14" },
  { name: "hehe15" },
];

const profile = () => {
  const [isChoose, setIsChoose] = useState<number>(0);
  swapData.length % 2 !== 0 && swapData.push({ name: "" });
  return (
    <ProviderContent
      resizeBgImage="cover"
      backgroundImage={images.regularBg}
      viewScroll="flatlist"
    >
      <CustomHeader title="Profile" />
      <View className="mt-[19px]">
        <View className="flex flex-row items-center gap-1 mb-[18px] px-8">
          <View className="bg-[#1565C0] flex flex-row justify-center items-center px-2 py-2 rounded-xl">
            <UserIcon></UserIcon>
          </View>
          <Text className="text-base font-semibold">ABC123@gmail.com</Text>
        </View>
        <View className="mb-4">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 32,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View className="overflow-hidden rounded-2xl">
                <Text
                  className={clsx(
                    "py-2 px-5 text-base font-bold transition-color duration-500",
                    isChoose === index ? "bg-black text-white" : "bg-white"
                  )}
                  onPress={() => setIsChoose(index)}
                >
                  {item.name}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
        <View className="my-4">
          <View className="flex flex-row gap-[19px] justify-center flex-wrap">
            {swapData.map((item, index) => {
              if (item.name === "")
                return (
                  <View className="basis-[40%]">
                    <TransparentItem />
                  </View>
                );
              return (
                <View key={index} className="basis-[40%] rounded-lg relative">
                  <CustomShadow offset={[10, 6]} radius={8} distance={5}>
                    <Image
                      source={images.bbnm}
                      className="w-fit rounded-lg"
                    ></Image>
                  </CustomShadow>
                  <View className="bg-red-400 top-1 right-5 rounded-md flex justify-center items-center absolute w-[30px] h-[30px]">
                    <Feather name="trash-2" size={24} color="white" />
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ProviderContent>
  );
};

export default profile;
