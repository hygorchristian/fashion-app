import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary" | "secondary" | "transparent";
}

export const Container = styled(RectButton)<ButtonProps>`
  overflow: hidden;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ variant, theme: { colors } }) =>
    ({
      default: colors.defaultButton,
      primary: colors.primary,
      secondary: colors.secondary,
      transparent: colors.transparent,
    }[variant])};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

export const Label = styled.Text<ButtonProps>`
  font-family: SFPro;
  font-size: 15px;
  color: ${({ variant, theme: { colors } }) =>
    ({
      default: colors.textPrimary,
      primary: colors.white,
      secondary: colors.white,
      transparent: colors.textPrimary,
    }[variant])};
`;
