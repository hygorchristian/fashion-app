import styled from "styled-components/native";

interface TitleProps {
  size: "small" | "medium" | "large";
}

export const Container = styled.Text<TitleProps>`
  font-size: ${({ size }) =>
    ({
      small: 20,
      medium: 24,
      large: 28,
    }[size])}px;
  line-height: ${({ size }) =>
    ({
      small: 24,
      medium: 30,
      large: 36,
    }[size])}px;
  font-family: SFProSemibold;
  text-align: center;
  width: 100%;
`;
