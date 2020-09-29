import React from "react";

import { Container } from "./styles";
import Google from "./icons/Google";
import Facebook from "./icons/Facebook";
import Apple from "./icons/Apple";

interface SocialButtonProps {
  onPress: () => void;
  icon: "google" | "facebook" | "apple";
}

const icons = {
  google: () => <Google />,
  facebook: () => <Facebook />,
  apple: () => <Apple />,
};

function SocialButton({ icon, ...props }: SocialButtonProps) {
  const Icon = icons[icon];
  return <Container {...props}>{Icon && <Icon />}</Container>;
}

export default SocialButton;
