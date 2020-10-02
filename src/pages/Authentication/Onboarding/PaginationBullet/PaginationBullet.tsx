import React from "react";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

import { Container } from "./styles";

interface PaginationBulletProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

function PaginationBullet({ currentIndex, index }: PaginationBulletProps) {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.5, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return <Container style={{ opacity, transform: [{ scale }] }} />;
}

export default PaginationBullet;
