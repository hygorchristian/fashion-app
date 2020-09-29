import React from "react";

import { Container, Label } from "./styles";

interface LinkProps {
  onPress: () => void;
  children: string;
}

function Link({ children, ...props }: LinkProps) {
  return (
    <Container {...props}>
      <Label>{children}</Label>
    </Container>
  );
}

export default Link;
