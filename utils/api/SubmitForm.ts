import { loginSchema, signupSchema } from "@/validation/auth";
import * as Device from "expo-device";
import * as Network from "expo-network";
import { z } from "zod";

type SignupForm = z.infer<typeof signupSchema>;
type LoginForm = z.infer<typeof loginSchema>;

export const registerSubmit = async (data: SignupForm) => {
  const formData = new FormData();
  const ipAdress = await Network.getIpAddressAsync();
  const device = Device.modelName || "unknown";

  formData.append("user_name", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("ip_register", ipAdress);
  formData.append("device_register", device);
  formData.append("link_avatar", "linh day");

  return formData;
};
export const loginSubmit = (data: LoginForm) => {
  const formData = new FormData();

  formData.append("email_or_username", data.email_or_username);
  formData.append("password", data.password);

  return formData;
};
