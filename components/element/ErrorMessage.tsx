import { View, Text } from "react-native";
import React from "react";

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <View>
      <Text className="text-red-500 text-sm">{message}</Text>
    </View>
  );
};

export default ErrorMessage;
