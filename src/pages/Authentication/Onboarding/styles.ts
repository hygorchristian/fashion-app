import styled from "styled-components/native";
import { ScrollViewProps } from "react-native";
import Animated from "react-native-reanimated";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../utils/dimensions";
import { ABSOLUTE_FILL } from "../../../utils/styles";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Slider = styled(Animated.View)`
  height: ${SCREEN_HEIGHT * 0.61};
  border-bottom-right-radius: 75;
`;

export const Scroll = styled(Animated.ScrollView).attrs(<ScrollViewProps>{
  horizontal: true,
  snapToInterval: SCREEN_WIDTH,
  decelerationRate: "fast",
  showsHorizontalScrollIndicator: false,
  bounces: false,
  scrollEventThrottle: 1,
})``;

export const Footer = styled.View`
  flex: 1;
`;

export const Overlay = styled(Animated.View)`
  ${ABSOLUTE_FILL};
`;

export const Box = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 75px;
`;
