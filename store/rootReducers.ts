import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
