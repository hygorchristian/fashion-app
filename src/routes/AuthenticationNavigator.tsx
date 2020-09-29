import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding, { onboardAssets } from "../pages/Authentication/Onboarding";
import Welcome, { welcomeAssets } from "../pages/Authentication/Welcome";
import Login, { loginAssets } from "../pages/Authentication/Login";

import { AuthenticationRoutes } from "./Navigation";

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
}

export const assets = [...onboardAssets, ...welcomeAssets, ...loginAssets];

export default AuthenticationNavigator;
