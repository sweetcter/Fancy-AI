import UserIcon from "@/assets/icons/UserIcon";
import images from "@/assets/images";
import CustomShadow from "@/components/CustomShadow";
import itemShadow from "@/styles/ItemShadow";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const dreamData: {
  id: string;
  url: ImageSourcePropType | undefined;
  category: string;
}[] = [
  {
    id: "1",
    url: images.pilot,
    category: "Pilot",
  },
  {
    id: "2",
    url: images.pilot,
    category: "Pilot",
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
  return (
    <ImageBackground
      source={images.homeBg}
      className="h-full w-full"
      resizeMode="cover"
    >
      <SafeAreaView>
        <ScrollView>
          <View className="bg-transparent w-full">
            <View className="flex-row justify-between items-center mx-8 mt-9 pb-10">
              <Text className="text-transparent">hehe</Text>
              <Link href={"/"}>
                <Text className="text-3xl font-medium ml-10 text-black uppercase">
                  fancy ai
                </Text>
              </Link>
              <View className="flex bg-[#1565C0] flex-row px-2 py-2 justify-center rounded-xl items-center">
                <Link href={"/profile"}>
                  <UserIcon size={28} />
                </Link>
              </View>
            </View>

            <View className="flex-row justify-between items-center mx-8 mb-2">
              <Text className="text-xl font-medium">Dream jobs</Text>
              <View className="flex flex-row items-baseline">
                <Link
                  href={"../(swap)/category"}
                  className="text-xl font-bold mr-1 text-black capitalize"
                  style={{ fontFamily: "datdz" }}
                >
                  all
                  <AntDesign name="right" size={20}></AntDesign>
                </Link>
              </View>
            </View>
            <View className="">
              <FlatList
                className="px-6 mb-6"
                data={dreamData}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 20,
                  paddingRight: 40,
                  paddingBottom: 20,
                  marginLeft: 10,
                }}
                renderItem={({ item }) => {
                  return (
                    <View className="relative rounded-[18px]">
                      <CustomShadow radius={20} distance={6} offset={[9, 9]}>
                        <Image
                          source={item.url}
                          className="w-fit rounded-[18px] overflow-hidden"
                        ></Image>
                        <Text className="absolute top-4 right-4 font-semibold text-xl bg-[#222] text-white px-3.5 py-1.5 rounded-full">
                          {item.category}
                        </Text>
                      </CustomShadow>
                    </View>
                  );
                }}
              ></FlatList>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-2">
                  <Text className="text-xl font-medium capitalize">
                    World Adventures
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className="pl-6 mt-2"
                  data={worldData}
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
                        <CustomShadow radius={20} distance={10} offset={[7, 7]}>
                          <Image
                            source={item.url}
                            className="rounded-xl w-fit"
                          ></Image>
                          <Text className="absolute top-1 right-1 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                            {item.category}
                          </Text>
                        </CustomShadow>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Fashion
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                          <Text className="absolute top-1 right-1 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                            {item.category}
                          </Text>
                        </CustomShadow>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-3">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Business fashion
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className="pl-6 mt-2"
                  data={businessData}
                  horizontal
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: 12,
                    paddingRight: 40,
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View className="relative rounded-[20px] ml-2 mb-4">
                        <CustomShadow
                          radius={20}
                          distance={10}
                          offset={[7, 7]}
                          opacity={1}
                        >
                          <Image
                            source={item.url}
                            className="rounded-[20px] w-fit overflow-hidden"
                          ></Image>
                          <Text className="absolute top-2 right-3 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                            {item.category}
                          </Text>
                        </CustomShadow>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-3">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Wedding vibe
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
                  data={weddingData}
                  horizontal
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: 12,
                    paddingRight: 40,
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View className="relative rounded-[18px] ml-2 mb-4">
                        <CustomShadow
                          radius={20}
                          distance={10}
                          offset={[7, 7]}
                          opacity={1}
                        >
                          <Image
                            source={item.url}
                            className="rounded-[18px] w-fit overflow-hidden"
                          ></Image>
                          <Text className="absolute top-2 right-3 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                            {item.category}
                          </Text>
                        </CustomShadow>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Fashion
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                      <View className="relative rounded-[18px] ml-2 mb-4 pb-2 pr-3">
                        <CustomShadow
                          radius={20}
                          distance={10}
                          offset={[7, 7]}
                          opacity={1}
                        >
                          <Image
                            source={item.url}
                            className="rounded-[18px] w-fit overflow-hidden"
                          ></Image>
                          <Text className="absolute top-1 right-2 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                            {item.category}
                          </Text>
                        </CustomShadow>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Leisure fashion
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                      <View className="relative rounded-[18px] ml-2 mb-4">
                        <CustomShadow
                          radius={20}
                          distance={10}
                          offset={[7, 7]}
                          opacity={1}
                        >
                          <Image
                            source={item.url}
                            className="rounded-[18px] w-fit overflow-hidden"
                          ></Image>
                          <Text className="absolute top-1 right-2 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                            {item.category}
                          </Text>
                        </CustomShadow>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Cosplay universe
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                      <View
                        className="relative rounded-[18px] ml-2 mb-4 pb-2 pr-3"
                        style={itemShadow.shadow}
                      >
                        <Image
                          source={item.url}
                          className="rounded-[18px] w-fit overflow-hidden"
                        ></Image>
                        <Text className="absolute top-2 right-3 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                          {item.category}
                        </Text>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Cosplay universe
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                      <View
                        className="relative rounded-[18px] ml-2 mb-4 pb-2 pr-3"
                        style={itemShadow.shadow}
                      >
                        <Image
                          source={item.url}
                          className="rounded-[18px] w-fit overflow-hidden"
                        ></Image>
                        <Text className="absolute top-2 right-3 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                          {item.category}
                        </Text>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">Y2k</Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                      <View
                        className="relative rounded-[18px] ml-2 mb-4 pb-2 pr-3"
                        style={itemShadow.shadow}
                      >
                        <Image
                          source={item.url}
                          className="rounded-[18px] w-fit overflow-hidden"
                        ></Image>
                        <Text className="absolute top-2 right-3 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                          {item.category}
                        </Text>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <View className="mb-2">
                <View className="flex-row justify-between items-center mx-8 mb-[6px]">
                  <Text className="text-xl font-medium capitalize">
                    Fitness style
                  </Text>
                  <View className="flex flex-row items-baseline">
                    <Text className="text-xl font-medium text-black capitalize">
                      all
                    </Text>
                    <AntDesign name="right" size={20}></AntDesign>
                  </View>
                </View>
                <FlatList
                  className=" pl-6 mt-2"
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
                      <View
                        className="relative rounded-[18px] ml-2 mb-4 pb-2 pr-3"
                        style={itemShadow.shadow}
                      >
                        <Image
                          source={item.url}
                          className="rounded-[18px] w-fit overflow-hidden"
                        ></Image>
                        <Text className="absolute top-2 right-3 font-semibold text-[10px] bg-[#222] text-white px-3 py-1 rounded-full">
                          {item.category}
                        </Text>
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
