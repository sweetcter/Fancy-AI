import CustomHeader from "@/components/CustomHeader";
import { publicRoutes } from "@/constants/router";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios",
          animationDuration: 600,
        }}
      >
        <Stack.Screen
          name={`${publicRoutes.topic}/[id]`}
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
