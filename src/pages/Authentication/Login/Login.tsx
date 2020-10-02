import React, { useState } from "react";

import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../../../routes/AuthenticationNavigator";
import LayoutContainer from "../../../components/LayoutContainer";
import SocialButton from "../../../components/SocialButton";
import Link from "../../../components/Link";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";

import {
  Footer,
  Content,
  SocialRow,
  AccountText,
  TextRow,
  WelcomeTitle,
  Text,
  LoginRow,
  FooterContainer,
} from "./styles";

export const assets = [];

function Login({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "Login">) {
  const [checked, setChecked] = useState(false);

  return (
    <LayoutContainer variant="left">
      <Content>
        <WelcomeTitle>Welcome back</WelcomeTitle>
        <Text>Use your credentials below and login to your account</Text>
        <TextInput icon="email" placeholder="Enter your email" />
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          secureTextEntry
        />
        <LoginRow>
          <Checkbox value={checked} onPress={() => setChecked(!checked)}>
            Remember me
          </Checkbox>
          <Link onPress={() => navigation.navigate("ResetPassword")}>
            Forgot password
          </Link>
        </LoginRow>
        <Button onPress={() => null} variant="primary">
          Login into your account
        </Button>
      </Content>
      <FooterContainer>
        <Footer>
          <SocialRow>
            <SocialButton icon="facebook" onPress={() => null} />
            <SocialButton icon="google" onPress={() => null} />
            <SocialButton icon="apple" onPress={() => null} />
          </SocialRow>
          <TextRow>
            <AccountText variant="light">Don't have and account?</AccountText>
            <Link onPress={() => navigation.navigate("CreateAccount")}>
              Sign Up here
            </Link>
          </TextRow>
        </Footer>
      </FooterContainer>
    </LayoutContainer>
  );
}

export default Login;
