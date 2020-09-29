import React from "react";

import { Container } from "./styles";

interface TitleProps {
  children?: string;
  size: "small" | "medium" | "large";
}

function Title(props: TitleProps) {
  return <Container {...props} />;
}

Title.defaultProps = { size: "large" };

export default Title;
