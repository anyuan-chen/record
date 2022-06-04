import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import "./styles/globals.css";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App></App>
      </ThemeProvider>
  </React.StrictMode>
);
