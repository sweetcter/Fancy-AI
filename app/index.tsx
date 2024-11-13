import { View, Text } from "react-native";
import React from "react";
import ProviderContent from "@/components/ProviderContent";
import images from "@/assets/images";
import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/(home)"}/>
  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="none"
    >
      <View>
        <Text>Various hot models</Text>
        <Text>are available</Text>
      </View>
    </ProviderContent>
  );
};

export default index;
