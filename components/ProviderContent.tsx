import React, { useEffect, useRef } from "react";
import { ImageResizeMode, ScrollView } from "react-native";
import {
  ImageBackground,
  ImageSourcePropType,
  FlatList,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
type ScrollType = "flatlist" | "scrollview" | "none";
export default function ProviderContent({
  children,
  backgroundImage,
  resizeBgImage="contain",
  viewScroll,
  styleScroll,
  classNameScroll,
  showScrollBarY = true,
  showScrollBarX = true,
  styleImageBg,
}: {
  children: React.ReactNode; // Đảm bảo kiểu dữ liệu là ReactNode
  backgroundImage: ImageSourcePropType;
  resizeBgImage?: ImageResizeMode;
  viewScroll: ScrollType;
  styleScroll?: StyleProp<ViewStyle>;
  classNameScroll?: string;
  showScrollBarY?: boolean;
  showScrollBarX?: boolean;
  styleImageBg?: StyleProp<ViewStyle>;
}) {
  const childArray = React.Children.toArray(children);

  return (
    <SafeAreaProvider>
      <ImageBackground
        style={styleImageBg}
        className="h-full w-full relative -z-[10]"
        resizeMode={resizeBgImage}
        source={backgroundImage}
      >
        <SafeAreaView>
          {viewScroll === "flatlist" ? (
            <FlatList
              data={childArray}
              renderItem={({ item }) => <>{item}</>}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
            />
          ) : viewScroll === "scrollview" ? (
            <ScrollView
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
            >
              {children}
            </ScrollView>
          ) : (
            <>{children}</>
          )}
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
