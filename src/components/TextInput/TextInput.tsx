import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { DefaultTheme } from "styled-components/native";
import { useTheme } from "styled-components";
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { Container, Input, IconContainer } from "./styles";

interface InputProps extends TextInputProps {
  icon?: "email" | "lock" | string;
}

export type InputStatuses = "default" | "focus" | "error";

interface IconColorsObj {
  [key: string]: string;
}

const iconColors = (theme: DefaultTheme): IconColorsObj => ({
  default: "rgba(138,141,144,0.4)",
  focus: theme.colors.primary,
  error: theme.colors.red,
});

function TextInput({ icon, ...props }: InputProps) {
  const theme = useTheme();
  const [status, setStatus] = useState<InputStatuses>("default");

  return (
    <Container status={status}>
      {icon && (
        <IconContainer>
          <MDIcon size={16} name={icon} color={iconColors(theme)[status]} />
        </IconContainer>
      )}
      <Input
        onFocus={() => setStatus("focus")}
        onBlur={() => setStatus("default")}
        autoCapitalize="none"
        {...props}
      />
    </Container>
  );
}

export default TextInput;
