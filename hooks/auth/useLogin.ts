import { authServices } from "@/services/auth";
import { setAuthenicate, setUser } from "@/store/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { useToastController } from "../useToastController";

const useLogin = () => {
  const { ToastController } = useToastController();

  const dispatch = useDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: FormData) => authServices.login(data),
    async onSuccess(res) {
      const { message, status, success, token, ...rest } = res;
      ToastController({
        text: res.message,
        type: res.status === 200 ? "success" : "warning",
        placement: "top",
      });

      if (res.status === 200) {
        await AsyncStorage.setItem("token", JSON.stringify(token));
        dispatch(setUser(rest));
        
        setTimeout(() => {
          router.replace("/(home)");
          dispatch(setAuthenicate(true));
        }, 0);
      }
    },
    onError(err) {
      console.log("error", err);
    },
  });
};

export default useLogin;
