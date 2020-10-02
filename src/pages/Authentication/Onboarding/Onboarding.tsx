import React, { useRef } from "react";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";
import Animated, { divide, multiply } from "react-native-reanimated";

import { SCREEN_WIDTH } from "../../../utils/dimensions";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../../../routes/AuthenticationNavigator";

import Slide from "./Slide";
import Subslide from "./Subslide";
import PaginationBullet from "./PaginationBullet";
import {
  Container,
  Slider,
  Footer,
  Scroll,
  FooterContent,
  Pagination,
  Shape,
  PaginationContent,
} from "./styles";

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best outfit here!",
    color: "#BDE9F4",
    picture: {
      source: require("../../../../assets/img/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BAF1BE",
    picture: {
      source: require("../../../../assets/img/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FDDDD4",
    picture: {
      source: require("../../../../assets/img/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FDD3DC",
    picture: {
      source: require("../../../../assets/img/4.png"),
      width: 1757,
      height: 2551,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.source);

function Onboarding({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "Onboarding">) {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => SCREEN_WIDTH * i),
    outputRange: slides.map((s) => s.color),
  });

  const handleNext = (index: number) => {
    scroll.current
      ?.getNode()
      .scrollTo({ x: SCREEN_WIDTH * index, animated: true });
  };

  const navigateWelcome = () => {
    navigation.navigate("Welcome");
  };

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Scroll ref={scroll} {...scrollHandler}>
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Scroll>
        <Shape />
        <Pagination>
          <PaginationContent>
            {slides.map((_, index) => (
              <PaginationBullet
                key={index}
                currentIndex={divide(x, SCREEN_WIDTH)}
                {...{ index }}
              />
            ))}
          </PaginationContent>
        </Pagination>
      </Slider>
      <Footer>
        <FooterContent
          style={{
            width: SCREEN_WIDTH * slides.length,
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {slides.map(({ subtitle, description }, index) => {
            const last = index === slides.length - 1;

            return (
              <Subslide
                key={index}
                last={last}
                onPress={() => {
                  if (last) {
                    navigateWelcome();
                  } else {
                    handleNext(index + 1);
                  }
                }}
                {...{ subtitle, description }}
              />
            );
          })}
        </FooterContent>
      </Footer>
    </Container>
  );
}

export default Onboarding;
