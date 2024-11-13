import Logout from "@/assets/icons/Logout";
import UserIcon from "@/assets/icons/UserIcon";
import images from "@/assets/images";
import CustomHeader from "@/components/CustomHeader";
import LoadingScreen from "@/components/element/LoadingScreen";
import LogoutModal from "@/components/element/LogoutModal";
import ProfileCard from "@/components/element/ProfileCard";
import ProviderContent from "@/components/ProviderContent";
import { useToastController } from "@/hooks/useToastController";
import { setOpenLogoutModal } from "@/store/slice/authSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import clsx from "clsx";
import { useRouter, useSegments } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const data: { name: string; id: number }[] = [
  {
    id: 1,
    name: "Dream jobs",
  },
  {
    id: 2,
    name: "World Adventures",
  },
  {
    id: 3,
    name: "Fashion",
  },
  {
    id: 4,
    name: "Wedding",
  },
];

const swapData = [
  { name: "hehe" },
  { name: "hehe2" },
  { name: "hehe3" },
  { name: "hehe4" },
  { name: "hehe5" },
  { name: "hehe6" },
  { name: "hehe7" },
  { name: "hehe8" },
  { name: "hehe9" },
  { name: "hehe10" },
  { name: "hehe11" },
  { name: "hehe12" },
  { name: "hehe13" },
  { name: "hehe14" },
  { name: "hehe15" },
];

const Profile = () => {
  const [isChoose, setIsChoose] = useState<number>(0);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const authenicated = useTypedSelector(
    (state) => state.authReducer.authenicate
  );
  const segment: string[] = useSegments();
  const handleOpenLogout = () => {
    setIsOpened(false);
  };

  const TopicCard = ({ name, index }: { name: string; index: number }) => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        activeOpacity={0.9}
        onPress={() => setIsChoose(index)}
        className="overflow-hidden rounded-2xl"
      >
        <Text
          className={clsx(
            "py-2 px-5 text-base font-bold transition-color duration-500",
            isChoose === index ? "bg-black text-white" : "bg-white"
          )}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  if (segment.includes("protected")) {
    if (!authenicated) return <LoadingScreen />;
  }

  return (
    <ProviderContent
      resizeBgImage="cover"
      backgroundImage={images.regularBg}
      viewScroll="flatlist"
    >
      <CustomHeader
        title="Profile"
        RightIcon={
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={40}
            onPress={() => setIsOpened(true)}
          >
            <Logout size={40} />
          </TouchableOpacity>
        }
      />
      <LogoutModal handleCloseModal={handleOpenLogout} isOpened={isOpened} />
      <View className="mt-[19px]">
        <View className="flex flex-row items-center gap-1 mb-[18px] px-8">
          <View className="bg-[#1565C0] flex flex-row justify-center items-center px-2 py-2 rounded-xl">
            <UserIcon size={30}></UserIcon>
          </View>
          <Text className="text-base font-semibold">ABC123@gmail.com</Text>
        </View>
        <View className="mb-4">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 32,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TopicCard name={item.name} index={index} />
            )}
          ></FlatList>
        </View>
        <View className="my-4">
          <View className="flex gap-[19px]">
            <FlatList
              data={swapData}
              keyExtractor={(item) => item.name}
              windowSize={11}
              initialNumToRender={10}
              numColumns={2}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={{ height: 19 }} />}
              columnWrapperStyle={{
                columnGap: 19,
                justifyContent: "center",
              }}
              renderItem={({ item, index }) => (
                <ProfileCard item={item} index={index} />
              )}
            ></FlatList>
          </View>
        </View>
      </View>
    </ProviderContent>
  );
};

export default Profile;
