import images from "@/assets/images";
import CustomHeader from "@/components/CustomHeader";
import CustomShadow from "@/components/CustomShadow";
import ProviderContent from "@/components/ProviderContent";
import itemShadow from "@/styles/ItemShadow";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, ImageSourcePropType, FlatList, Image } from "react-native";

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
  {
    id: "5",
    url: images.classicMan,
    category: "Classic Style",
  },
  {
    id: "6",
    url: images.classicMan,
    category: "Classic Style",
  },
];

const category = () => {
  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="flatlist"
    >
      <CustomHeader title="Dream jobs" />
      <View className="mt-6">
        <FlatList
          data={dreamData}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal: 0,
            paddingBottom: 20,
            paddingRight: 40,
          }}
          renderItem={({ item }) => {
            return (
              <CustomShadow radius={12} distance={6} offset={[10, 12]}>
                <View className="relative rounded-[18px]">
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
                    <Text className="bg-black px-8 py-2 mr-1 font-bold text-base rounded-2xl text-white">
                      Start
                    </Text>
                  </View>
                </View>
              </CustomShadow>
            );
          }}
        ></FlatList>
        <View className="my-6">
          <View className="mx-8 mb-[6px]">
            <Text className="text-2xl font-medium capitalize">Most used</Text>
          </View>
          <View className="flex flex-row flex-wrap gap-[19px] justify-center">
            {businessData.map((item, index) => (
              <View className="basis-[40%]" key={index}>
                <CustomShadow
                  radius={10}
                  distance={8}
                  offset={[8, 4]}
                  opacity={0.6}
                >
                    <View className="rounded-xl">
                      <Image
                        source={item.url}
                        className="rounded-xl w-fit overflow-hidden"
                      />
                    </View>
                </CustomShadow>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ProviderContent>
  );
};

export default category;
