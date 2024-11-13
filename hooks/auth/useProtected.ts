import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setOpenModal } from "@/store/slice/authSlice";
import { Href, useRouter } from "expo-router";
import { useTypedSelector } from "@/store/store";

const useProtected = () => {
  const authenicated = useTypedSelector(
    (state) => state.authReducer.authenicate
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const handleProtected = (href: string) => {
    if (href.includes("protected" as string) && !authenicated) {
      dispatch(setOpenModal());
    } else {
      router.navigate(href as Href<string>);
    }
  };
  return handleProtected;
};

export default useProtected;
