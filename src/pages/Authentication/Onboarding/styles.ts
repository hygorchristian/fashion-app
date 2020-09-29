import styled from "styled-components/native";
import { ScrollViewProps } from "react-native";
import Animated from "react-native-reanimated";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../utils/dimensions";
import { BottomRightRadius } from "../../../components/Paths";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Slider = styled(Animated.View)`
  height: ${({ theme }) => SCREEN_HEIGHT * 0.61 + theme.radius.xl}px;
`;

export const Scroll = styled(Animated.ScrollView).attrs(<ScrollViewProps>{
  horizontal: true,
  snapToInterval: SCREEN_WIDTH,
  decelerationRate: "fast",
  showsHorizontalScrollIndicator: false,
  bounces: false,
  scrollEventThrottle: 1,
  disableIntervalMomentum: true,
})``;

export const Footer = styled.View`
  flex: 1;
`;

export const Pagination = styled.View`
  position: absolute;
  bottom: 0;
  height: 150px;
  border-top-left-radius: ${({ theme }) => theme.radius.xl}px;
  bottom: ${({ theme }) => -theme.radius.xl}px;
  width: ${SCREEN_WIDTH}px;
  background-color: white;
`;

export const PaginationContent = styled.View`
  height: ${({ theme }) => theme.radius.xl}px;
  width: ${SCREEN_WIDTH}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FooterContent = styled(Animated.View)`
  flex: 1;
  border-top-left-radius: ${({ theme }) => theme.radius.xl}px;
  flex-direction: row;
`;

export const Shape = styled(BottomRightRadius)`
  position: absolute;
  bottom: ${({ theme }) => theme.radius.xl}px;
  right: 0px;
`;
