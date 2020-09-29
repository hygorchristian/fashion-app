import * as React from "react";

import Routes from "./src/routes";
import ThemeProvider from "./src/providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
