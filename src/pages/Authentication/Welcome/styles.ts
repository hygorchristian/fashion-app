import styled from "styled-components/native";
import { ScrollViewProps } from "react-native";

import { SCREEN_WIDTH } from "../../../utils/dimensions";
import Typography from "../../../components/Typography";
import ButtonBase from "../../../components/Button";
import { BottomRightRadius } from "../../../components/Paths";

interface ImageProps {
  picture: {
    width: number;
    height: number;
  };
}

export const Container = styled.View`
  flex: 1;
  height: ${SCREEN_WIDTH}px;
  background-color: ${({ theme }) => theme.colors.slideGrey};
  width: 100%;
`;

export const ContentTop = styled.View`
  flex: 1;
  overflow: hidden;
  align-items: center;
`;

export const ContentBottom = styled.ScrollView.attrs(<ScrollViewProps>{
  contentContainerStyle: {
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 60,
  },
  bounces: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: white;
  border-top-left-radius: ${({ theme }) => theme.radius.xl}px;
`;

export const Text = styled(Typography)`
  text-align: center;
  margin-top: 28px;
`;

export const Image = styled.Image<ImageProps>`
  width: ${({ theme }) => SCREEN_WIDTH - theme.radius.xl}px;
  height: ${({ theme, picture }) =>
    ((SCREEN_WIDTH - theme.radius.xl) * picture.width) / picture.height}px;
`;

export const Shape = styled(BottomRightRadius)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Button = styled(ButtonBase)`
  margin-top: 28px;
`;
