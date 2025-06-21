import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const styles = {
  // global returns an object that defines styles. We can define CSS that will
  // be applied across our entire application
  global: (props) => ({
    // global is applied to the body tag
    body: {
      // using gray.100 for the light mode background and using #000 for the dark mode
      bg: mode("gray.100", "#000")(props),
      // using gray.800 for the light mode text color and using whiteAlpha.900 for the dark mode
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark", // sets the inital color mode of the application
  useSystemColorMode: false, // disables the detection of the system's color mode
};

// theme is being passed to ChakraProvider and applies the theme to the entire application
// these are combined into a single theme object
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
