import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(","),
  },
});

function App() {
  const router = useRoutes(routes());

  return (
    <ThemeProvider theme={theme}>
      <>{router}</>
    </ThemeProvider>
  );
}
export default App;
