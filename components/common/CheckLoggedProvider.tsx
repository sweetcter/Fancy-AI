import { useToastController } from "@/hooks/useToastController";
import { useTypedSelector } from "@/store/store";
import { router } from "expo-router";
import React from "react";

const CheckLoggedProvider = ({ children }: { children: React.ReactNode }) => {
  const authenicate = useTypedSelector(
    (state) => state.authReducer.authenicate
  );
  const { ToastController } = useToastController();

  if (authenicate) {
    ToastController({
      text: "You are logged in",
      placement: "top",
      type: "warning",
    });
    router.replace("/(home)");
  }
  return children;
};

export default CheckLoggedProvider;
