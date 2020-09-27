import * as React from "react";
import "react-native-gesture-handler";

import LoadAssets from "../components/LoadAssets";

import AuthenticationNavigator from "./AuthenticationNavigator";

const fonts = {
  SFProBold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
  SFPro: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
  SFProSemibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
