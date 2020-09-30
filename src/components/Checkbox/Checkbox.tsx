import React, { CSSProperties } from "react";
import { ViewStyle } from "react-native";

import { Container, Label, Check } from "./styles";

interface CheckboxProps {
  children: string;
  value: boolean;
  onPress: () => void;
  style?: ViewStyle & CSSProperties;
}

function Checkbox({
  children,
  style,
  value,
  onPress,
  ...props
}: CheckboxProps) {
  return (
    <Container style={style} onPress={onPress}>
      <Check status={value ? "checked" : "unchecked"} {...props} />
      <Label>{children}</Label>
    </Container>
  );
}

export default Checkbox;
