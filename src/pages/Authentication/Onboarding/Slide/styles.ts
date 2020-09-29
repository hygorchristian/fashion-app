import styled from "styled-components/native";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../../utils/dimensions";
import { ABSOLUTE_FILL } from "../../../../utils/styles";

export const SLIDE_HEIGHT = 0.61 * SCREEN_HEIGHT;
const SLIDER_OFFSETX = SLIDE_HEIGHT / 2 - 50;
const SLIDER_OFFSETY = SCREEN_WIDTH / 2 - 50;

interface TitleProps {
  isright?: boolean;
}
interface PictureProps {
  picture: {
    height: number;
    width: number;
  };
}

export const Container = styled.View`
  width: ${SCREEN_WIDTH};
`;

export const TitleContainer = styled.View<TitleProps>`
  height: 100px;
  justify-content: center;
  transform: translateY(${SLIDER_OFFSETY}px)
    translateX(
      ${({ isright }) => (isright ? -SLIDER_OFFSETX : SLIDER_OFFSETX)}px
    )
    rotate(${({ isright }) => (isright ? "-90deg" : "90deg")});
`;

export const Title = styled.Text`
  font-size: 80px;
  font-family: SFProBold;
  color: white;
  text-align: center;
  line-height: 80px;
`;

export const ImageContainer = styled.View`
  ${ABSOLUTE_FILL};
  justify-content: flex-end;
  align-items: center;
`;

export const Picture = styled.Image<PictureProps>`
  width: ${({ theme }) => SCREEN_WIDTH - theme.radius.xl}px;
  height: ${({ picture }) =>
    ((SCREEN_WIDTH - 20) * picture.height) / picture.width};
`;
