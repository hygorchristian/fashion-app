import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      defaultButton: string;
      white: string;
      red: string;
      textPrimary: string;
      textSecondary: string;
      textSecondaryLight: string;
      slideGrey: string;
      transparent: string;
      inputOutlineDefault: string;
    };
    spacing: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    radius: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
  }
}
