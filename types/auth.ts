import { IAxiosResponse } from "./AxiosResponse";

export type AuthForm = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export type AuthState = {
  user: {
    email: string;
    id_user: number;
    ip_register: string;
    device_register: string;
    link_avatar: string;
    user_name: string;
  };
  authenicate: boolean;
  openModal: boolean;
  logoutModal: boolean;
};

export interface IAuthResponse extends IAxiosResponse {
  count_comment: number;
  count_sukien: number;
  count_view: number;
  device_register: string;
  email: string;
  id_user: number;
  ip_register: string;
  link_avatar: string;
  time_coin: number;
  token: string;
  user_name: string;
};
