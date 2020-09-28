import React from "react";

import { Container, Title, TitleContainer } from "./styles";

interface SlideProps {
  label: string;
  right?: boolean;
}

function Slide({ label, right }: SlideProps) {
  return (
    <Container>
      <TitleContainer right={right}>
        <Title>{label}</Title>
      </TitleContainer>
    </Container>
  );
}

export default Slide;
