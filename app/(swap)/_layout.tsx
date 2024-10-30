import CustomHeader from "@/components/CustomHeader";
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
          name="index"
          options={{
            headerShown: true,
            header: () => <CustomHeader title="Swap" />,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTransparent: true,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="category"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="topic"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
