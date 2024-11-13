import UserIcon from "@/assets/icons/UserIcon";
import images from "@/assets/images";
import CustomShadow from "@/components/CustomShadow";
import LargeCard from "@/components/element/LargeCard";
import SmallCard from "@/components/element/SmallCard";
import ProviderContent from "@/components/ProviderContent";
import { paths } from "@/constants/router";
import useProtected from "@/hooks/auth/useProtected";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dreamData: {
  id: string;
  url: ImageSourcePropType | undefined;
  category: string;
}[] = [
  {
    id: "1",
    url: images.karina,
    category: "Idol",
  },
  {
    id: "2",
    url: images.karinaSmile,
    category: "Idol",
  },
  {
    id: "3",
    url: images.pilot,
    category: "Pilot",
  },
  {
    id: "4",
    url: images.pilot,
    category: "Pilot",
  },
];
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
];

const fashionData: {
  id: string;
  url: ImageSourcePropType | undefined;
  category: string;
}[] = [
  {
    id: "1",
    url: images.y2k,
    category: "Classic Style",
  },
  {
    id: "2",
    url: images.bbnm,
    category: "Classic Style",
  },
  {
    id: "3",
    url: images.y2k,
    category: "Classic Style",
  },
  {
    id: "4",
    url: images.bbnm,
    category: "Classic Style",
  },
];
const businessData: {
  id: string;
  url: ImageSourcePropType | undefined;
  category: string;
}[] = [
  {
    id: "1",
    url: images.classicWoman,
    category: "Classic Style",
  },
  {
    id: "2",
    url: images.classicMan,
    category: "Classic Style",
  },
  {
    id: "3",
    url: images.classicWoman,
    category: "Classic Style",
  },
  {
    id: "4",
    url: images.classicMan,
    category: "Classic Style",
  },
];
const weddingData: {
  id: string;
  url: ImageSourcePropType | undefined;
  category: string;
}[] = [
  {
    id: "1",
    url: images.whiteWedding,
    category: "Classic Style",
  },
  {
    id: "2",
    url: images.pinkWedding,
    category: "Classic Style",
  },
  {
    id: "3",
    url: images.whiteWedding,
    category: "Classic Style",
  },
  {
    id: "4",
    url: images.pinkWedding,
    category: "Classic Style",
  },
];

export default function HomeScreen() {
  const authProtected = useProtected();

  const handlerProtected = (href: string) => {
    authProtected(href);
  };
  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="flatlist"
    >
      <View className="bg-transparent w-full">
        <View className="flex-row justify-between items-center mx-8 mt-9 pb-10">
          <Text className="text-transparent">hehe</Text>
          <Link href={"/(auth)/login"} suppressHighlighting>
            <Text className="text-3xl font-bold ml-10 text-black uppercase">
              fancy ai
            </Text>
          </Link>
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            activeOpacity={0.7}
            onPress={() => handlerProtected("/(home)/protected/profile")}
            className="flex bg-[#1565C0] flex-row px-2 py-2 justify-center rounded-xl items-center"
          >
            <UserIcon size={26} />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center mx-8">
          <Text className="text-xl font-bold">Dream jobs</Text>
          <View className="">
            <TouchableOpacity
              hitSlop={20}
              onPress={() => router.navigate(paths.topic(1))}
              className="flex flex-row items-baseline"
            >
              <Text className="text-xl font-bold mr-1 text-black capitalize">
                all
              </Text>
              <AntDesign name="right" size={20}></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            className="px-[4%]"
            data={dreamData}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
              paddingRight: 40,
              paddingTop: 8,
              paddingBottom: 22,
              marginLeft: 10,
            }}
            renderItem={({ item,index }) => {
              return <LargeCard item={item} />;
            }}
          ></FlatList>
          <View className="">
            <View className="flex-row justify-between items-center mx-8 mb-2">
              <Text className="text-xl font-bold capitalize">
                World Adventures
              </Text>
              <View className="flex flex-row items-baseline">
                <Link
                  href={"/(templates)/topic/1"}
                  className="text-xl font-bold text-black capitalize"
                >
                  <Text>all</Text>
                  <AntDesign name="right" size={20}></AntDesign>
                </Link>
              </View>
            </View>
            <FlatList
              className="pl-6 py-2"
              data={worldData}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 12,
                paddingRight: 40,
              }}
              renderItem={({ item }) => {
                return <SmallCard item={item} isTag />;
              }}
            ></FlatList>
          </View>
          <View className="pt-2">
            <View className="flex-row justify-between items-center mx-8 mb-[6px]">
              <Text className="text-xl font-bold capitalize">Fashion</Text>
              <View className="flex flex-row items-baseline">
                <Text className="text-xl font-bold text-black capitalize">
                  all
                </Text>
                <AntDesign name="right" size={20}></AntDesign>
              </View>
            </View>
            <FlatList
              className="pl-6 py-2"
              data={fashionData}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 12,
                paddingRight: 40,
              }}
              renderItem={({ item }) => {
                return (
                  <View className="relative rounded-xl ml-2 mb-4">
                    <CustomShadow
                      radius={20}
                      distance={10}
                      offset={[7, 7]}
                      opacity={1}
                    >
                      <Image
                        source={item.url}
                        className="rounded-xl w-fit overflow-hidden"
                      ></Image>
                      <View className="absolute top-1 right-1 overflow-hidden rounded-2xl">
                        <Text className=" font-semibold text-[8px] bg-[#222] text-white px-3 py-1">
                          {item.category}
                        </Text>
                      </View>
                    </CustomShadow>
                  </View>
                );
              }}
            ></FlatList>
          </View>
        </View>
      </View>
    </ProviderContent>
  );
}
