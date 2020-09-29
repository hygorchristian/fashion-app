import React from "react";

import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../../../routes/Navigation";
import LayoutContainer from "../../../components/LayoutContainer";
import SocialButton from "../../../components/SocialButton";
import Link from "../../../components/Link";
import TextInput from "../../../components/TextInput";

import {
  Footer,
  Content,
  SocialRow,
  AccountText,
  TextRow,
  WelcomeTitle,
  Text,
} from "./styles";

export const assets = [];

function Login({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "Login">) {
  return (
    <LayoutContainer variant="left">
      <Content>
        <WelcomeTitle>Welcome back</WelcomeTitle>
        <Text>Use your credentials below and login to your account</Text>
        <TextInput icon="email" placeholder="Hello" />
        <TextInput />
        <TextInput />
      </Content>
      <Footer>
        <SocialRow>
          <SocialButton icon="facebook" onPress={() => null} />
          <SocialButton icon="google" onPress={() => null} />
          <SocialButton icon="apple" onPress={() => null} />
        </SocialRow>
        <TextRow>
          <AccountText variant="light">Don't have and account?</AccountText>
          <Link onPress={() => null}>Sign Up here</Link>
        </TextRow>
      </Footer>
    </LayoutContainer>
  );
}

export default Login;
