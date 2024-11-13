import images from "@/assets/images";
import CheckLoggedProvider from "@/components/common/CheckLoggedProvider";
import KeyBoardProvider from "@/components/common/KeyBoardProvider";
import ErrorMessage from "@/components/element/ErrorMessage";
import FormItem from "@/components/element/FormItem";
import ProviderContent from "@/components/ProviderContent";
import useLogin from "@/hooks/auth/useLogin";
import { loginSubmit } from "@/utils/api/SubmitForm";
import { loginSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { z } from "zod";

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email_or_username: "", password: "" },
  });
  const { mutate, isPending } = useLogin();
  const password = useRef<TextInput>(null);

  const onSubmit = async (data: LoginForm) => {
    const formData = loginSubmit(data);

    mutate(formData, {
      onSuccess(res) {
        if (res.status === 200) {
          reset({ email_or_username: "", password: "" });
        }
      },
    });
  };

  return (
    <CheckLoggedProvider>
      <ProviderContent
        backgroundImage={images.authBg}
        resizeBgImage="cover"
        viewScroll="none"
      >
        <KeyBoardProvider>
          <View className="mx-auto w-[60%]">
            <View className="mt-20">
              <Text className="font-semibold text-base text-center">
                Log in for a better experience
              </Text>
            </View>
            <View className="mt-8">
              <View className="mb-2">
                <Text className="font-semibold text-base focus:">Email</Text>
                <Controller
                  name="email_or_username"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => {
                    return (
                      <FormItem
                        placeholder="Type your email or username"
                        accessibilityLabel="Username input"
                        placeholderTextColor={"#333"}
                        returnKeyType="next"
                        onSubmitEditing={() => password.current?.focus()}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        blurOnSubmit={false}
                        value={value}
                        className="bg-white rounded-xl px-3 py-3"
                      />
                    );
                  }}
                ></Controller>
                {errors.email_or_username && (
                  <ErrorMessage
                    message={errors.email_or_username.message}
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
                        ref={password}
                        placeholder="Type your password"
                        accessibilityLabel="Password input"
                        placeholderTextColor={"#333"}
                        onBlur={onBlur}
                        returnKeyType="done"
                        onSubmitEditing={handleSubmit(onSubmit)}
                        secureTextEntry={true}
                        onChangeText={onChange}
                        blurOnSubmit={true}
                        value={value}
                        className="bg-white rounded-xl px-3 py-3"
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
              <View className="flex flex-row gap-1 items-center">
                <Checkbox
                  value={isChecked}
                  onValueChange={setIsChecked}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                />
                <Text
                  className="text-xs font-semibold"
                  onPress={() => setIsChecked(!isChecked)}
                >
                  Remember to log in
                </Text>
              </View>
              <View className="mt-3">
                <TouchableOpacity
                  className="mb-2"
                  onPress={handleSubmit(onSubmit)}
                  activeOpacity={0.7}
                >
                  <View className="bg-[#057BED] py-2 px-12 rounded-lg mx-auto">
                    {isPending ? (
                      <ActivityIndicator />
                    ) : (
                      <Text className="text-white text-center">Log in</Text>
                    )}
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
            <View className="bg-black py-2 px-11 rounded-lg mx-auto">
              <Text className="text-white text-center">Sign Up</Text>
            </View>
          </TouchableOpacity>
        </KeyBoardProvider>
      </ProviderContent>
    </CheckLoggedProvider>
  );
};

export default Login;
