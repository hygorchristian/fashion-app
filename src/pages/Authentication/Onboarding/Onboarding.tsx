import React, { useRef } from "react";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";
import Animated, { multiply } from "react-native-reanimated";

import { SCREEN_WIDTH } from "../../../utils/dimensions";

import Slide from "./Slide";
import Subslide from "./Subslide";
import {
  Container,
  Slider,
  Footer,
  Scroll,
  Overlay,
  FooterContent,
  FooterOverlay,
} from "./styles";

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best outfit here!",
    color: "#BDE9F4",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BAF1BE",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FDDDD4",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FDD3DC",
  },
];

function Onboarding() {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => SCREEN_WIDTH * i),
    outputRange: slides.map((s) => s.color),
  });

  const handleNext = (index) => {
    scroll.current
      ?.getNode()
      .scrollTo({ x: SCREEN_WIDTH * index, animated: true });
  };

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Scroll ref={scroll} {...{ onScroll }}>
          {slides.map(({ title }, index) => (
            <Slide key={index} label={title} right={!!(index % 2)} />
          ))}
        </Scroll>
      </Slider>
      <Footer>
        <Overlay style={{ backgroundColor }} />
        <FooterOverlay>
          <FooterContent
            style={{
              width: SCREEN_WIDTH * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                last={index === slides.length - 1}
                onPress={() => handleNext(index + 1)}
                {...{ subtitle, description }}
              />
            ))}
          </FooterContent>
        </FooterOverlay>
      </Footer>
    </Container>
  );
}

export default Onboarding;
