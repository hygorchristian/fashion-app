import React from "react";

import Title from "../../../components/Title";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../../../routes/Navigation";

import {
  Container,
  Image,
  ContentBottom,
  ContentTop,
  Shape,
  Text,
  Button,
} from "./styles";

const picture = {
  source: require("../../../../assets/img/5.png"),
  width: 5074,
  height: 3383,
};

export const assets = [picture.source];

function Welcome({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "Welcome">) {
  return (
    <Container>
      <ContentTop>
        <Image picture={picture} source={picture.source} />
        <Shape />
      </ContentTop>
      <ContentBottom>
        <Title>Let's get started</Title>
        <Text>
          Login to your account below or signup for an amazing experience
        </Text>

        <Button onPress={() => navigation.navigate("Login")} variant="primary">
          Have an account? Login
        </Button>
        <Button onPress={() => navigation.navigate("CreateAccount")}>
          Join us, it's free
        </Button>
        <Button onPress={() => null} variant="transparent">
          Forgot password?
        </Button>
      </ContentBottom>
    </Container>
  );
}

export default Welcome;
