import images from "@/assets/images";
import React from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const login = () => {
  return (
    <ImageBackground
      source={images.regularBg}
      className="h-full w-full"
      resizeMode="cover"
    >
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
                  <Text className="font-semibold text-base">New password</Text>
                  <TextInput
                    placeholder="Type your new password"
                    secureTextEntry
                    className="bg-white rounded-lg px-2 py-1"
                  ></TextInput>
                </View>
                <View className="mb-2">
                  <Text className="font-semibold text-base">
                    Confirm password
                  </Text>
                  <TextInput
                    secureTextEntry
                    placeholder="Type your confirm password"
                    className="bg-white rounded-lg px-2 py-1"
                  ></TextInput>
                </View>

                <View className="mt-3 ">
                  <TouchableOpacity
                    className="mb-2"
                    onPress={() => console.log("press press")}
                    activeOpacity={0.7}
                  >
                    <View className="bg-[#057BED] py-2 px-12 rounded-lg mx-auto">
                      <Text className="text-white text-center">Change</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default login;
