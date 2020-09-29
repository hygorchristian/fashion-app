import * as React from "react";
import "react-native-gesture-handler";

import LoadAssets from "../components/LoadAssets";

import AuthenticationNavigator, {
  assets as authenticationAssets,
} from "./AuthenticationNavigator";

const assets = [...authenticationAssets];

const fonts = {
  SFProBold: require("../../assets/fonts/SF-Pro-Display-Semibold.ttf"),
  SFPro: require("../../assets/fonts/SF-Pro-Display-Regular.ttf"),
  SFProSemibold: require("../../assets/fonts/SF-Pro-Display-Semibold.ttf"),
  SFProMedium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
