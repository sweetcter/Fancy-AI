import FemaleIcon from "@/assets/icons/FemaleIcon";
import MaleIcon from "@/assets/icons/MaleIcon";
import images from "@/assets/images";
import CustomHeader from "@/components/CustomHeader";
import SmallCard from "@/components/element/SmallCard";
import ProviderContent from "@/components/ProviderContent";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const worldData: {
  id: string;
  url: ImageSourcePropType | undefined;
  category: string;
}[] = [
  {
    id: "1",
    url: images.missGrandTL,
    category: "Thailand",
  },
  {
    id: "2",
    url: images.missGrandVn,
    category: "Vietnam",
  },
  {
    id: "3",
    url: images.missGrandTL,
    category: "Thailand",
  },
  {
    id: "4",
    url: images.missGrandVn,
    category: "Vietnam",
  },
  {
    id: "5",
    url: images.missGrandVn,
    category: "Vietnam",
  },
  {
    id: "6",
    url: images.missGrandVn,
    category: "Vietnam",
  },
];
const Page = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ] as { id?: number }[];

  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="flatlist"
    >
      <CustomHeader title="Pilot"></CustomHeader>
      <View className="flex flex-row justify-center gap-0.5 items-center mt-3">
        <TouchableOpacity
          activeOpacity={0.7}
          className="overflow-hidden rounded border border-black"
        >
          <Text
            className="bg-black px-2 py-2 text-white"
            style={{ fontFamily: "Inter" }}
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
      <View className="mt-[26px] pb-4">
        <FlatList
          className="pl-6 py-2"
          data={worldData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          initialNumToRender={10}
          numColumns={2}
          columnWrapperStyle={{
            gap: 19,
          }}
          ItemSeparatorComponent={() => <View className="h-[15px]"></View>}
          renderItem={({ item }) => {
            return <SmallCard item={item} isTag />;
          }}
        ></FlatList>
        {/* <View
          className="flex flex-row
          justify-center items-center
           flex-wrap"
        >
          {data.map((item, index) => (
            <View key={index} className="basis-[40%]">
              <CustomShadow distance={8} offset={[10, 6]}>
                <View className="overflow-hidden w-fit rounded-md">
                  <Image source={images.bbnm} className="w-fit"></Image>
                </View>
              </CustomShadow>
            </View>
          ))}
          <TransparentItem />
        </View> */}
      </View>
    </ProviderContent>
  );
};

export default Page;
