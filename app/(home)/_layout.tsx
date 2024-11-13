import ProtectedProvider from "@/components/common/ProtectedProvider";
import AuthProtectedModal from "@/components/element/ProtectedModal";
import { publicRoutes } from "@/constants/router";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <ProtectedProvider>
      <AuthProtectedModal />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios",
          animationDuration: 300,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={publicRoutes.profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ProtectedProvider>
  );
}
