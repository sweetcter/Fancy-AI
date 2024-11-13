import images from "@/assets/images";
import KeyBoardProvider from "@/components/common/KeyBoardProvider";
import ErrorMessage from "@/components/element/ErrorMessage";
import FormItem from "@/components/element/FormItem";
import ProviderContent from "@/components/ProviderContent";
import { changePasswordSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { z } from "zod";

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: ChangePasswordForm) => {
    console.log(data);
  };

  return (
    <ProviderContent
      backgroundImage={images.regularBg}
      resizeBgImage="cover"
      viewScroll="none"
    >
      <KeyBoardProvider>
        <View className="mx-auto w-[60%]">
          <View className="mt-28">
            <View className="mb-2">
              <Text className="font-semibold text-base">Email</Text>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                  return (
                    <FormItem
                      placeholder="Type your email"
                      accessibilityLabel="Email input"
                      placeholderTextColor={"#333"}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="bg-white rounded-xl px-3 py-2"
                    />
                  );
                }}
              ></Controller>

              {errors.email && (
                <ErrorMessage message={errors.email.message}></ErrorMessage>
              )}
            </View>
            <View className="mb-2">
              <Text className="font-semibold text-base">New password</Text>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                  return (
                    <FormItem
                      secureTextEntry
                      placeholder="Type your new password"
                      placeholderTextColor={"#333"}
                      className="bg-white rounded-xl px-3 py-2"
                      accessibilityLabel="New password input"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                    />
                  );
                }}
              ></Controller>
              {errors.password && (
                <ErrorMessage message={errors.password.message}></ErrorMessage>
              )}
            </View>
            <View className="mb-2">
              <Text className="font-semibold text-base">Confirm password</Text>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                  return (
                    <FormItem
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      secureTextEntry
                      placeholderTextColor={"#333"}
                      placeholder="Type your confirm password"
                      className="bg-white rounded-xl px-3 py-2"
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
                <View className="bg-[#057BED] py-1.5 px-10 rounded-lg mx-auto">
                  <Text className="text-white text-center">Change</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyBoardProvider>
    </ProviderContent>
  );
};

export default ChangePassword;
