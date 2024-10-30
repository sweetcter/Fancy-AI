import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { Text, View } from "react-native";

type CustomHeaderProps = {
  title: string;
};

const CustomHeader = ({ title }: CustomHeaderProps) => {
  return (
    <View className="mt-[45px] flex flex-row items-center mx-8 justify-between">
      <Entypo
        name="chevron-thin-left"
        size={26}
        color="black"
        onPress={() => router.back()}
      />
      <Text className="font-bold text-3xl">{title}</Text>
      <Text className="text-transparent">hehe</Text>
    </View>
  );
};

export default CustomHeader;
