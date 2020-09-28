import React from "react";

import { Container, Label } from "./styles";

interface ButtonProps {
  variant: "default" | "primary" | "secondary";
  children: string;
  onPress: () => void;
}

function Button({ variant, children, onPress, ...props }: ButtonProps) {
  return (
    <Container {...{ variant, onPress, ...props }}>
      <Label {...{ variant }}>{children}</Label>
    </Container>
  );
}

Button.defaultProps = { variant: "default" };

export default Button;
