import { authServices } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useToastController } from "../useToastController";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useRegister = () => {
  const { ToastController } = useToastController();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: FormData) => authServices.register(data),
    async onSuccess(res) {
      ToastController({
        text: res.message,
        type: res.status === 200 ? "success" : "warning",
        placement: "top",
      });
    },
    onError(err) {
      console.log("errors", err);
    },
  });
};

export default useRegister;
