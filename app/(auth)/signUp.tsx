import images from "@/assets/images";
import ProviderContent from "@/components/ProviderContent";
import CheckLoggedProvider from "@/components/common/CheckLoggedProvider";
import KeyBoardProvider from "@/components/common/KeyBoardProvider";
import ErrorMessage from "@/components/element/ErrorMessage";
import FormItem from "@/components/element/FormItem";
import useRegister from "@/hooks/auth/useRegister";
import { registerSubmit } from "@/utils/api/SubmitForm";
import { signupSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from "zod";

type SignupForm = z.infer<typeof signupSchema>;

const SignUp = () => {
  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });
  const { mutate } = useRegister();

  const usernameInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const confirmInput = useRef<TextInput>(null);

  const onSubmit = async (data: SignupForm) => {
    const formData = await registerSubmit(data);
    mutate(formData, {
      onSuccess() {
        reset(defaultValues);
      },
    });
  };
  return (
    <CheckLoggedProvider>
      <ProviderContent
        backgroundImage={images.authBg}
        viewScroll="scrollview"
        resizeBgImage="cover"
      >
        <KeyBoardProvider>
          <View className="mx-auto w-[60%] mt-[69px]">
            <View className="mt-20">
              <View className="mb-2">
                <Text className="font-semibold text-base focus:">Email</Text>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => {
                    return (
                      <FormItem
                        placeholder="Type your email"
                        accessibilityLabel="Email input"
                        onSubmitEditing={() => usernameInput.current?.focus()}
                        placeholderTextColor={"#333"}
                        blurOnSubmit={false}
                        returnKeyType="next"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        className="bg-white rounded-xl px-3 py-3"
                      />
                    );
                  }}
                ></Controller>

                {errors.email && (
                  <ErrorMessage message={errors.email.message}></ErrorMessage>
                )}
              </View>
              <View className="mb-2">
                <Text className="font-semibold text-base focus:">Username</Text>
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => {
                    return (
                      <FormItem
                        ref={usernameInput}
                        onSubmitEditing={() => passwordInput.current?.focus()}
                        placeholder="Type your username"
                        accessibilityLabel="Username input"
                        placeholderTextColor={"#333"}
                        blurOnSubmit={false}
                        onBlur={onBlur}
                        returnKeyType="next"
                        onChangeText={onChange}
                        value={value}
                        className="bg-white rounded-xl px-3 py-3"
                      />
                    );
                  }}
                ></Controller>

                {errors.username && (
                  <ErrorMessage
                    message={errors.username.message}
                  ></ErrorMessage>
                )}
              </View>
              <View className="mb-2">
                <Text className="font-semibold text-base">Password</Text>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => {
                    return (
                      <FormItem
                        secureTextEntry
                        ref={passwordInput}
                        placeholder="Type your password"
                        onSubmitEditing={() => confirmInput.current?.focus()}
                        placeholderTextColor={"#333"}
                        className="bg-white rounded-xl px-3 py-3"
                        accessibilityLabel="Password input"
                        blurOnSubmit={false}
                        returnKeyType="next"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                      />
                    );
                  }}
                ></Controller>
                {errors.password && (
                  <ErrorMessage
                    message={errors.password.message}
                  ></ErrorMessage>
                )}
              </View>
              <View className="mb-2">
                <Text className="font-semibold text-base">
                  Confirm Password
                </Text>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => {
                    return (
                      <FormItem
                        ref={confirmInput}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        secureTextEntry
                        returnKeyType="done"
                        blurOnSubmit={true}
                        placeholderTextColor={"#333"}
                        placeholder="Type your confirm password"
                        className="bg-white rounded-xl px-3 py-3"
                        accessibilityLabel="Confirm password input"
                      />
                    );
                  }}
                ></Controller>
                {errors.confirmPassword && (
                  <ErrorMessage
                    message={errors.confirmPassword.message}
                  ></ErrorMessage>
                )}
              </View>
              <View className="mt-3">
                <TouchableOpacity
                  className="mb-2"
                  onPress={handleSubmit(onSubmit)}
                  activeOpacity={0.7}
                >
                  <View className="bg-[#057BED] py-2 px-10 rounded-lg mx-auto">
                    <Text className="text-white text-center">Sign up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyBoardProvider>
      </ProviderContent>
    </CheckLoggedProvider>
  );
};

export default SignUp;
