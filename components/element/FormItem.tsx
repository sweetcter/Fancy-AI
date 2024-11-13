import React, { forwardRef } from "react";
import { ColorValue, TextInput } from "react-native";

type Props = {
  value: string;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  accessibilityLabel?: string;
  returnKeyType?: "done" | "next" | "go" | "search" | "send";
  onSubmitEditing?: () => void;
  secureTextEntry?: boolean;
  blurOnSubmit?: boolean;
  className?: string;
};

const FormItem = forwardRef<TextInput,Props>((props: Props, ref) => {
  return <TextInput {...props} ref={ref}  />;
});

// FormItem.displayName = "FormItem";
export default FormItem;
