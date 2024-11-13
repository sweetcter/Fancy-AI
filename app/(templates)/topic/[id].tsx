import images from "@/assets/images";
import CustomHeader from "@/components/CustomHeader";
import SmallCard from "@/components/element/SmallCard";
import TopicCard from "@/components/element/TopicCard";
import ProviderContent from "@/components/ProviderContent";
import { useLocalSearchParams } from "expo-router";
import { FlatList, ImageSourcePropType, Text, View } from "react-native";

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

const Page = () => {
  const { id } = useLocalSearchParams();
  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="flatlist"
    >
      <CustomHeader title="Dream jobs" />
      <View>
        <FlatList
          data={dreamData}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal: 0,
            paddingTop:24,
            paddingBottom: 20,
            paddingRight: 40,
          }}
          renderItem={({ item, index }) => {
            return <TopicCard item={item} key={index} />;
          }}
        ></FlatList>
        <View className="my-6">
          <View className="mx-8 mb-3">
            <Text className="text-2xl font-bold capitalize">Most used</Text>
          </View>
          <View className="flex flex-row flex-wrap justify-center">
            {businessData.map((item, index) => (
              <SmallCard item={item} key={index} isTag={false} />
            ))}
          </View>
        </View>
      </View>
    </ProviderContent>
  );
};

export default Page;
