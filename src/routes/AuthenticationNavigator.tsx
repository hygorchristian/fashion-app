import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";

import Onboarding, { onboardAssets } from "../pages/Authentication/Onboarding";
import Welcome, { welcomeAssets } from "../pages/Authentication/Welcome";
import Login, { loginAssets } from "../pages/Authentication/Login";
import CreateAccount from "../pages/Authentication/CreateAccount";
import ResetPassword from "../pages/Authentication/ResetPassword";

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
  ResetPassword: undefined;
};

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen
        name="CreateAccount"
        component={CreateAccount}
      />
      <AuthenticationStack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
    </AuthenticationStack.Navigator>
  );
}

export const assets = [...onboardAssets, ...welcomeAssets, ...loginAssets];

export default AuthenticationNavigator;
