import CustomHeader from "@/components/CustomHeader";
import { publicRoutes } from "@/constants/router";
import { Entypo } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { View } from "react-native";
const _layout = () => {
  return (
    <Stack screenOptions={{ animation: "ios", animationDuration: 300 }}>
      <Stack.Screen
        name={publicRoutes.login}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <View hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-thin-left"
                size={28}
                color="black"
                className="px-3 py-2 bg-white"
              />
            </View>
          ),
          headerTitle: "Log in",
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={publicRoutes.signUp}
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
        name={publicRoutes.changePassword}
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
