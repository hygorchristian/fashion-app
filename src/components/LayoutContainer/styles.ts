import styled from "styled-components/native";

import { SCREEN_WIDTH } from "../../utils/dimensions";
import { BottomLeftRadius, BottomRightRadius } from "../Paths";
import { ABSOLUTE_FILL } from "../../utils/styles";

interface VariantProps {
  variant: "right" | "left" | "center";
}

const aspectRatio = 250 / 375;
const imageHeight = SCREEN_WIDTH * aspectRatio - 20;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: ${imageHeight - 75}px;
`;

export const Card = styled.View<VariantProps>`
  background-color: white;
  flex: 1;
  border-top-left-radius: ${({ variant, theme }) =>
    ({
      left: 0,
      right: theme.radius.xl,
      center: theme.radius.xl,
    }[variant])}px;
  border-top-right-radius: ${({ variant, theme }) =>
    ({
      left: theme.radius.xl,
      right: 0,
      center: theme.radius.xl,
    }[variant])}px;
  overflow: hidden;
`;

export const Right = styled(BottomRightRadius)`
  position: absolute;
  top: ${imageHeight - 150}px;
  right: 0;
`;

export const Left = styled(BottomLeftRadius)`
  position: absolute;
  top: ${imageHeight - 150}px;
  left: 0;
`;

export const PatternContainer = styled.View`
  ${ABSOLUTE_FILL};
  width: ${SCREEN_WIDTH}px;
  height: ${imageHeight}px;
`;

export const CardContainer = styled.View`
  flex: 1;
  background-color: #0f0a2c;
`;

export const CardContent = styled.View`
  flex: 1;
  background-color: white;
  border-bottom-left-radius: ${({ theme }) => theme.radius.xl};
  border-bottom-right-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
`;

export const CardFooter = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 120px;
`;
