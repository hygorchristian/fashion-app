import React from "react";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import { SCREEN_WIDTH } from "../../../utils/dimensions";

import Slide from "./Slide";
import { Container, Slider, Footer, Scroll, Overlay, Box } from "./styles";

const slider = [
  { label: "Relaxed", color: "#BDE9F4" },
  { label: "Playful", color: "#BAF1BE" },
  { label: "Excentric", color: "#FDDDD4" },
  { label: "Funky", color: "#FDD3DC" },
];

function Onboarding() {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slider.map((_, i) => SCREEN_WIDTH * i),
    outputRange: slider.map((s) => s.color),
  });

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Scroll {...{ onScroll }}>
          {slider.map((slide, index) => (
            <Slide label={slide.label} right={index % 2} />
          ))}
        </Scroll>
      </Slider>
      <Footer>
        <Overlay style={{ backgroundColor }} />
        <Box />
      </Footer>
    </Container>
  );
}

export default Onboarding;
