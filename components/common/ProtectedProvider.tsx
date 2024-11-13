import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { router, useSegments } from "expo-router";
import { useToastController } from "@/hooks/useToastController";
import { useTypedSelector } from "@/store/store";

type ProtectedProviderProps = {
  children: React.ReactNode;
};

const ProtectedProvider = ({ children }: ProtectedProviderProps) => {
  const segment: string[] = useSegments();
  const { ToastController } = useToastController();
  const authenicate = useTypedSelector(
    (state) => state.authReducer.authenicate
  );

  useEffect(() => {
    if (segment.includes("protected") && !authenicate) {
      router.navigate("/(home)");
      router.navigate("/(auth)/login");
      ToastController({
        type: "warning",
        text: "You are not logged in",
        placement: "top",
      });
    }
  }, [segment]);

  return children;
};

export default ProtectedProvider;
