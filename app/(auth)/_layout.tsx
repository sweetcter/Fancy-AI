import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack screenOptions={{ animation: "ios", animationDuration: 600 }}>
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          header: () => <CustomHeader title="Log in" />,
          headerTransparent: true,
          headerShadowVisible: false,
         
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="signUp"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          header: () => <CustomHeader title="Sign up" />,
          headerTransparent: true,
          headerShadowVisible: false,
         
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="changePassword"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          header: () => <CustomHeader title="Change password" />,
          headerTransparent: true,
          headerShadowVisible: false,
         
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _layout;
