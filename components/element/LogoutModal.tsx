import useLogout from "@/hooks/auth/useLogout";
import { setAuthenicate } from "@/store/slice/authSlice";
import { useAppDispatch } from "@/store/store";
import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type LogoutModal = {
  isOpened: boolean;
  handleCloseModal: () => void;
};

const LogoutModal = ({ isOpened, handleCloseModal }: LogoutModal) => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    useLogout();
    dispatch(setAuthenicate(false));
    handleCloseModal();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isOpened}>
      <TouchableOpacity
        activeOpacity={1}
        className={"bg-black/40 flex-1 -z-10 justify-center items-center"}
        onPress={handleCloseModal}
      >
        <TouchableWithoutFeedback>
          <View className="bg-white w-[90vw] z-10 rounded-md">
            <Text className="font-bold text-lg text-center mt-4 mb-[75px]">
              Sign out of this account
            </Text>
            <View className="flex flex-row justify-between items-center mx-8 mb-[11px]">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleLogout}
                className="rounded-md overflow-hidden"
              >
                <Text className="bg-red-500 text-white text-lg font-bold px-6 py-[10px]">
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleCloseModal}
                className="rounded-md overflow-hidden"
              >
                <Text className="bg-black text-white text-lg font-bold px-6 py-[10px]">
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default LogoutModal;
