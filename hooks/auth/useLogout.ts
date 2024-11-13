import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const useLogout = async () => {
  try {
    await AsyncStorage.removeItem("token");
    router.replace("/(home)");
  } catch (error) {
    console.log(error);
  }
};

export default useLogout;
