import clsx from "clsx";
import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import itemShadow from "../styles/ItemShadow";

const CustomButton = ({
  passClassName,
  children,
  onPress,
}: {
  passClassName?: string;
  onPress?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <TouchableOpacity className="mb-2 rounded-lg overflow-hidden" onPress={onPress} activeOpacity={0.7}>
      <View className="">
        <Text
          className={`
            py-2 px-12  text-white text-center ${passClassName}
          `}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
