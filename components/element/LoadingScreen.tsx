import images from "@/assets/images";
import React from "react";
import { ActivityIndicator, ImageBackground } from "react-native";

const LoadingScreen = () => {
  return (
    <ImageBackground source={images.startScreen} className="flex-1 -z-10">
      <ActivityIndicator
        color={"#000"}
        className="flex-1 justify-center items-center mt-28"
        size={"large"}
      />
    </ImageBackground>
  );
};

export default LoadingScreen;
