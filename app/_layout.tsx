import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar, View, Text } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import { AntDesign } from "@expo/vector-icons";
import { ReduxProvider } from "@/contexts/ReduxProvider";
import QueryProvider from "@/contexts/QueryProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Inter: require("../assets/fonts/Inter.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ReduxProvider>
        <QueryProvider>
          <ToastProvider
            successColor="#4ade80"
            swipeEnabled={true}
            offsetTop={50}
            warningIcon={<AntDesign name="warning" size={24} color="yellow" />}
          >
            <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
            <Stack
              screenOptions={{
                animation: "ios",
                animationDuration: 300,
              }}
            >
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(home)" options={{ headerShown: false }} />
              <Stack.Screen
                name="(templates)"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ToastProvider>
        </QueryProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
