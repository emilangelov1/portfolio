import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  useStore,
  lightTheme,
  darkTheme,
} from "../themes";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../styles/globals";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const state = useStore();
  return (
    <ThemeProvider
      theme={
        state.theme === "light"
          ? lightTheme
          : darkTheme
      }
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
