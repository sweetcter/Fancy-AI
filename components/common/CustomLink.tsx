import { View, Text } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";

type Props = {
  href: Href<string>;
  children: React.ReactNode;
};

const CustomLink = ({ children, href, ...rest }: Props) => {
  return <Link href={href}>{children}</Link>;
};

export default CustomLink;
