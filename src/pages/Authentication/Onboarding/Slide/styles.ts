import styled from "styled-components/native";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../../utils/dimensions";

export const SLIDE_HEIGHT = 0.61 * SCREEN_HEIGHT;
const SLIDER_OFFSETX = SCREEN_WIDTH / 2 - 40;

interface TitleProps {
  right?: boolean;
}

export const Container = styled.View`
  width: ${SCREEN_WIDTH};
`;

export const TitleContainer = styled.View<TitleProps>`
  height: 100px;
  justify-content: center;
  transform: translateY(${(SLIDE_HEIGHT - 100) / 2}px)
    translateX(${({ right }) => (right ? -SLIDER_OFFSETX : SLIDER_OFFSETX)}px)
    rotate(${({ right }) => (right ? "-90deg" : "90deg")});
`;

export const Title = styled.Text`
  font-size: 80px;
  font-family: SFProBold;
  color: white;
  text-align: center;
  line-height: 80px;
`;
