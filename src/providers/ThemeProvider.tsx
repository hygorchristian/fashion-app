import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0c0d34",
    white: "#ffffff",
    red: "#FE5E33",
    defaultButton: "rgba(12, 13, 52, 0.08)",
    textPrimary: "#0c0d34",
    textSecondary: "rgba(12,13,52,0.7)",
    textSecondaryLight: "rgba(12,13,52,0.5)",
    slideGrey: "#e7e3e2",
    transparent: "transparent",
    inputOutlineDefault: "#EEEEEE",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  radius: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
};

interface ThemeProps {
  children: ReactElement | ReactElement[];
}

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export type ThemeType = typeof theme;
export default Theme;
