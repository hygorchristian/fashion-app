import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../pages/Authentication/Onboarding";

const AuthenticationStack = createStackNavigator();

function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
}

export default AuthenticationNavigator;
