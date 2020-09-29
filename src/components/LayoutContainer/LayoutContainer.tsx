import React, { ReactNode } from "react";
import { StatusBar } from "react-native";
import { SvgXml } from "react-native-svg";

import { SCREEN_WIDTH } from "../../utils/dimensions";

import {
  Container,
  Content,
  Card,
  Left,
  Right,
  CardContainer,
  CardContent,
  CardFooter,
  PatternContainer,
} from "./styles";
import { pattern1, pattern2, pattern3 } from "./patterns";

interface LayoutContainerProps {
  variant: "right" | "left" | "center";
  children: ReactNode[];
}

interface PatternsType {
  [key: string]: string;
}

const patterns: PatternsType = {
  right: pattern1,
  left: pattern2,
  center: pattern3,
};

function LayoutContainer({
  variant,
  children,
  ...props
}: LayoutContainerProps) {
  const pattern = patterns[variant];
  const aspectRatio = 250 / 375;

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <PatternContainer>
        <SvgXml
          xml={pattern}
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH * aspectRatio}
        />
      </PatternContainer>
      <Content>
        {variant === "right" && <Right fill="white" />}
        {variant === "left" && <Left fill="white" />}
        <Card variant={variant}>
          <CardContainer>
            <CardContent {...props}>{children[0]}</CardContent>
            <CardFooter>{children[1]}</CardFooter>
          </CardContainer>
        </Card>
      </Content>
    </Container>
  );
}

LayoutContainer.defaultProps = { variant: "left" };

export default LayoutContainer;
