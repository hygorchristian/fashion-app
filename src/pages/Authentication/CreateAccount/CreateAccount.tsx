import React from "react";

import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../../../routes/Navigation";
import LayoutContainer from "../../../components/LayoutContainer";
import {
  AccountText,
  Footer,
  SocialRow,
  Text,
  TextRow,
  WelcomeTitle,
} from "../Login/styles";
import SocialButton from "../../../components/SocialButton";
import Link from "../../../components/Link";
import TextInput from "../../../components/TextInput";

import { Content } from "./styles";

function CreateAccount({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "CreateAccount">) {
  return (
    <LayoutContainer variant="right">
      <Content>
        <WelcomeTitle>Create account</WelcomeTitle>
        <Text>Let’s us know what is your name, email, and your password</Text>
        <TextInput icon="email" placeholder="Enter your email" />
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          secureTextEntry
        />
        <TextInput icon="lock" placeholder="Confirm password" secureTextEntry />
      </Content>
      <Footer>
        <SocialRow>
          <SocialButton icon="facebook" onPress={() => null} />
          <SocialButton icon="google" onPress={() => null} />
          <SocialButton icon="apple" onPress={() => null} />
        </SocialRow>
        <TextRow>
          <AccountText variant="light">Don't have and account?</AccountText>
          <Link onPress={() => navigation.navigate("Login")}>Login here</Link>
        </TextRow>
      </Footer>
    </LayoutContainer>
  );
}

export default CreateAccount;
