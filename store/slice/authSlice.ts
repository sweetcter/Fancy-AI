import { AuthState } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: {
    email: "",
    id_user: 0,
    ip_register: "",
    user_name: "",
    device_register: "",
    link_avatar: "",
  },
  authenicate: false,
  openModal: false,
  logoutModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.openModal = true;
    },
    setCloseModal: (state) => {
      state.openModal = false;
    },
    setOpenLogoutModal: (state) => {
      state.logoutModal = true;
    },
    setCloseLogoutModal: (state) => {
      state.logoutModal = false;
    },
    setAuthenicate: (state, action: PayloadAction<boolean>) => {
      state.authenicate = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;
export const {
  setOpenModal,
  setCloseModal,
  setAuthenicate,
  setCloseLogoutModal,
  setOpenLogoutModal,
  setUser
} = authSlice.actions;
export default authReducer;
