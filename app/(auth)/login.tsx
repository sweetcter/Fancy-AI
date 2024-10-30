import images from "@/assets/images";
import CheckBox from "@/components/CheckBox";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const login = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <ImageBackground source={images.authBg} className="flex-1">
      <SafeAreaView className="flex-1 mt-[69px]">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
          
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View className="mx-auto w-[60%]">
              <View className="mt-20">
                <Text className="font-semibold text-center">
                  Log in for a better experience
                </Text>
              </View>
              <View className="mt-8">
                <View className="mb-2">
                  <Text className="font-semibold text-base focus:">Email</Text>
                  <TextInput
                    placeholder="Type your email"
                    className="bg-white rounded-lg px-2 py-1"
                  ></TextInput>
                </View>
                <View className="mb-2">
                  <Text className="font-semibold text-base">Password</Text>
                  <TextInput
                    placeholder="Type your password"
                    className="bg-white rounded-lg px-2 py-1"
                  ></TextInput>
                </View>
                <View className="flex flex-row gap-1 items-baseline">
                  <CheckBox
                    onChange={() => setIsCheck(!isCheck)}
                    checked={isCheck}
                  ></CheckBox>
                  <Text className="text-xs font-semibold">
                    Remember to log in
                  </Text>
                </View>
                <View className="mt-3 ">
                  <TouchableOpacity
                    className="mb-2"
                    onPress={() => console.log("press press")}
                    activeOpacity={0.7}
                  >
                    <View className="bg-[#057BED] py-2 px-12 rounded-lg mx-auto">
                      <Text className="text-white text-center">Log in</Text>
                    </View>
                  </TouchableOpacity>
                  <Link
                    href={"./changePassword"}
                    className="font-semibold text-center text-xs underline"
                  >
                    Forgot password
                  </Link>
                </View>
              </View>
            </View>
            <Text className="text-sm mt-4 mb-3 font-semibold text-center">
              Please register if you don't have an account
            </Text>
            <TouchableOpacity
              className="mb-2"
              onPress={() => router.navigate("./signUp")}
              activeOpacity={0.7}
            >
              <View className="bg-black py-2 px-12 rounded-lg mx-auto">
                <Text className="text-white text-center">Sign in</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default login;
