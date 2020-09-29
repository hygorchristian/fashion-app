import React from "react";

import { Container } from "./styles";

interface TypographyProps {
  children?: string;
  variant: "light" | "dark";
}

function Typography(props: TypographyProps) {
  return <Container {...props} />;
}

Typography.defaultProps = { variant: "dark" };

export default Typography;
