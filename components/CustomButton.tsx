import { Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";

const CustomButton = ({
  children,
  onPress,
  passClassName = "",
}: {
  onPress?: () => void;
  children: React.ReactNode;
  passClassName?: string;
}) => {
  return (
    <Text
      className={
        (twMerge(`
            py-2 px-4 text-white text-center font-bold rounded-md
          `),
        passClassName)
      }
    >
      {children}
    </Text>
  );
};

export default CustomButton;
