import React from "react";

import { Container, Description, Subtitle, Button } from "./styles";

interface SubslideProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

function Subslide({ subtitle, description, last, onPress }: SubslideProps) {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      <Button variant={last ? "primary" : "default"} {...{ onPress }}>
        {last ? "Let's get started" : "Next"}
      </Button>
    </Container>
  );
}

export default Subslide;
