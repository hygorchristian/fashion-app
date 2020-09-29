import React from "react";
import { ImageRequireSource } from "react-native";

import {
  Container,
  Title,
  TitleContainer,
  ImageContainer,
  Picture,
} from "./styles";

interface SlideProps {
  title: string;
  right?: boolean;
  picture: {
    source: ImageRequireSource;
    width: number;
    height: number;
  };
}

function Slide({ title, picture, right }: SlideProps) {
  return (
    <Container>
      <ImageContainer>
        <Picture
          picture={picture}
          source={picture.source}
          resizeMode="contain"
        />
      </ImageContainer>
      <TitleContainer isright={right}>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}

export default Slide;
