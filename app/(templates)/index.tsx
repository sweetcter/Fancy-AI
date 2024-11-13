import images from "@/assets/images";
import ProviderContent from "@/components/ProviderContent";
import { styles } from "@/styles/swap";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const index = () => {
  return (
    <ProviderContent backgroundImage={images.regularBg} resizeBgImage="cover" viewScroll="flatlist">
      <View className={`mt-[50%]`}>
        <View className="flex flex-row justify-center gap-3 items-center mb-[214px]">
          <View
            className="w-[155px] h-[213px] pb-2 pr-2.5 rounded-lg "
            style={styles.imageShadow}
          >
            <Image source={images.bbnm} className="w-full h-full rounded-lg" />
          </View>
          <View>
            <AntDesign name="swap" size={28} color="white" />
          </View>
          <View>
            <View
              className="w-[155px] h-[213px] pb-2 pr-2.5 rounded-lg "
              style={styles.imageShadow}
            >
              <Image
                source={images.bbnm}
                className="w-full h-full rounded-lg"
              />
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center mx-8">
          <View>
            <Ionicons name="reload" size={51} color="white" />
          </View>

          <TouchableOpacity
            className="mb-2 rounded-lg overflow-hidden"
            activeOpacity={0.7}
          >
            <View className="">
              <Text
                className={`
            py-2 px-8  text-white text-center text-base font-bold bg-[#057BED]
          `}
              >
                Confirm
              </Text>
            </View>
          </TouchableOpacity>
          <View
            className="bg-red-400 rounded-md flex justify-center items-center w-[51px] aspect-square"
            style={styles.trashIcon}
          >
            <Feather name="trash-2" size={32} color="white" />
          </View>
        </View>
      </View>
    </ProviderContent>
  );
};

export default index;
