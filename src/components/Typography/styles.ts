import styled from "styled-components/native";

interface TypographyProps {
  variant: "light" | "dark";
}

export const Container = styled.Text<TypographyProps>`
  font-family: SFPro;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme, variant }) =>
    ({
      light: theme.colors.white,
      dark: theme.colors.textSecondary,
    }[variant])};
`;
