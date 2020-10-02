import React from "react";

import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../../../routes/AuthenticationNavigator";
import LayoutContainer from "../../../components/LayoutContainer";
import SocialButton from "../../../components/SocialButton";
import Link from "../../../components/Link";
import TextInput from "../../../components/TextInput";

import {
  Content,
  WelcomeTitle,
  Text,
  TextRow,
  AccountText,
  SocialRow,
  Footer,
  Button,
} from "./styles";

function ResetPassword({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "ResetPassword">) {
  return (
    <LayoutContainer variant="center">
      <Content>
        <WelcomeTitle>Forgot password?</WelcomeTitle>
        <Text>Enter the email address associated with your account</Text>
        <TextInput icon="email" placeholder="Enter your email" />
        <Button onPress={() => null} variant="primary">
          Reset password
        </Button>
        <TextRow>
          <AccountText>Don't work?</AccountText>
          <Link onPress={() => navigation.navigate("CreateAccount")}>
            Try another way
          </Link>
        </TextRow>
      </Content>

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
    </LayoutContainer>
  );
}

export default ResetPassword;
