import styled, { DefaultTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

interface InputProps {
  status: "default" | "focus" | "error";
}

const colors = (theme: DefaultTheme) => ({
  default: theme.colors.inputOutlineDefault,
  focus: theme.colors.primary,
  error: theme.colors.red,
});

export const Container = styled.View<InputProps>`
  height: 48px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.s};
  border-width: 1px;
  border-color: ${({ status, theme }) => colors(theme)[status]};
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Input = styled.TextInput.attrs(<TextInputProps>{
  placeholderTextColor: "rgba(21,22,36,0.5)",
})`
  flex: 1;
  color: #151624;
  height: 100%;
`;

export const IconContainer = styled.View`
  margin-right: 12px;
`;
