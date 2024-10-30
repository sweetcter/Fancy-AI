import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <>
      <Stack
        initialRouteName="profile"
        screenOptions={{
          headerShown: false,
          animation: "ios",
          animationDuration: 600,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
