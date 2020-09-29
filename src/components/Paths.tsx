import React from "react";
import { Svg, Path, PathProps } from "react-native-svg";

export const TopLeftRadius = ({ fill = "white", ...props }: PathProps) => (
  <Svg viewBox="0 0 75 75" height={75} width={75} {...props}>
    <Path fill={fill} d="M75,0H0V75A75,75,0,0,1,75,0Z" />
  </Svg>
);

export const TopRightRadius = ({ fill = "white", ...props }: PathProps) => (
  <Svg viewBox="0 0 75 75" height={75} width={75} {...props}>
    <Path fill={fill} d="M0,0A75,75,0,0,1,75,75V0Z" />
  </Svg>
);

export const BottomLeftRadius = ({ fill = "white", ...props }: PathProps) => (
  <Svg viewBox="0 0 75 75" height={75} width={75} {...props}>
    <Path fill={fill} d="M0,0V75H75A75,75,0,0,1,0,0Z" />
  </Svg>
);

export const BottomRightRadius = ({ fill = "white", ...props }: PathProps) => (
  <Svg viewBox="0 0 75 75" height={75} width={75} {...props}>
    <Path fill={fill} d="M0,75H75V0A75,75,0,0,1,0,75Z" />
  </Svg>
);
