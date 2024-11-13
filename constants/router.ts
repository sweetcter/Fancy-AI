import { Href } from "expo-router";

type PathsType = {
  topic: (id: string | number) => Href;
  template: (id: string | number) => Href;
};

export const publicRoutes = {
  profile: "protected/profile",
  login: "login",
  signUp: "signUp",
  changePassword: "changePassword",
  topic: "topic",
};
export const folderRoutes = {
  home: "/(home)",
  auth: "/(auth)",
  templates: "/(templates)",
};

// paths key is a function when need a id param
export const paths: PathsType = {
  topic: (id) => `/(templates)/topic/${id}`,
  template: (id) => `/(templates)/template/${id}`,
};

export const privateRoutes = {};
