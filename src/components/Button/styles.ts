import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary" | "secondary";
}

export const Container = styled(RectButton)<ButtonProps>`
  overflow: hidden;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ variant }) =>
    ({
      default: "rgba(12, 13, 52, 0.08)",
      primary: "#2CB9B0",
      secondary: "#2CB9B0",
    }[variant])};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<ButtonProps>`
  font-family: SFPro;
  font-size: 15px;
  color: ${({ variant }) =>
    ({
      default: "#0C0D34",
      primary: "white",
      secondary: "white",
    }[variant])};
`;
