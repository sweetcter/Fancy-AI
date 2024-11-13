import images from "@/assets/images";
import CustomShadow from "@/components/CustomShadow";
import PageDot from "@/components/element/PageDot";
import StartButton from "@/components/element/StartButton";
import ProviderContent from "@/components/ProviderContent";
import React from "react";
import {
  Dimensions,
  Image,
  Text,
  View
} from "react-native";

const { width, height } = Dimensions.get("window");

const index = () => {
  // return <Redirect href={"/(home)"}/>
  return (
    <ProviderContent
      backgroundImage={images.homeBg}
      resizeBgImage="cover"
      viewScroll="scrollview"
    >
      <View className="bg-white p-2 rounded-lg mr-9 my-[10px]">
        <Text className="text-[35px] font-bold leading-[42px]">
          Various hot models
        </Text>
        <Text className="text-xl font-bold">are available</Text>
      </View>
      <View className="mt-[14px] flex flex-row flex-wrap gap-x-2 justify-center relative">
        <View className="">
          <CustomShadow distance={6} radius={8} opacity={0.2} offset={[0, -7]}>
            <View
              style={{
                width: width * 0.46,
                height: height * 0.36,
              }}
              className="rounded-md overflow-hidden z-[1]"
            >
              <Image
                source={images.startImageOne}
                className="w-full h-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
        <View className="">
          <CustomShadow distance={6} radius={8} opacity={0.2} offset={[0, -7]}>
            <View
              style={{
                width: width * 0.46,
                height: height * 0.36,
              }}
              className="rounded-md overflow-hidden z-[1]"
            >
              <Image
                source={images.startImageTwo}
                className="w-full h-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
        <View className="-mt-[26%]">
          <CustomShadow distance={6} radius={8} opacity={0.2} offset={[0, -7]}>
            <View
              style={{
                width: width * 0.46,
                height: height * 0.36,
              }}
              className="rounded-md overflow-hidden z-[1]"
            >
              <Image
                source={images.startImageThree}
                className="w-full h-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
        <View className="-mt-[26%]">
          <CustomShadow distance={6} radius={8} opacity={0.2} offset={[0, -7]}>
            <View
              style={{
                width: width * 0.46,
                height: height * 0.36,
              }}
              className="rounded-md overflow-hidden z-[1]"
            >
              <Image
                source={images.startImageFour}
                className="w-full h-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
        <View className="-mt-[26%]">
          <CustomShadow distance={6} radius={8} opacity={0.2} offset={[0, -7]}>
            <View
              style={{
                width: width * 0.46,
                height: height * 0.36,
              }}
              className="rounded-md overflow-hidden z-[1]"
            >
              <Image
                source={images.startImageFive}
                className="w-full h-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
        <View className="-mt-[26%]">
          <CustomShadow distance={6} radius={8} opacity={0.2} offset={[0, -7]}>
            <View
              style={{
                width: width * 0.46,
                height: height * 0.36,
                transform: [{ scaleX: -1 }],
              }}
              className="rounded-md overflow-hidden z-[1]"
            >
              <Image
                source={images.startImageSix}
                className="w-full h-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
        <View className="-mt-[34%] rounded-full border border-black">
          <CustomShadow distance={10} radius={100} opacity={1} offset={[8, 8]}>
            <View
              style={{
                width: width * 0.44,
                height: width * 0.44,
              }}
              className="z-[1]"
            >
              <Image
                source={images.startImage}
                className="w-full h-full scale-110 rounded-full"
                resizeMode="cover"
              ></Image>
            </View>
          </CustomShadow>
        </View>
      </View>
      <View className="flex flex-row justify-center mt-[110px]">
        <CustomShadow offset={[4, 6]} radius={8} opacity={1} distance={6}>
          <StartButton />
        </CustomShadow>
      </View>
      <View className="flex flex-row justify-center mt-3 mb-10">
        <PageDot></PageDot>
      </View>
    </ProviderContent>
  );
};

export default index;
