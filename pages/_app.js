import React from "react";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const GlobalContext = React.createContext(null);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("light");
  const globalState = {
    theme,
    setTheme,
  };
  const lightTheme = {
    bg: "#fff",
    primary: "#000",
    secondary: "#686868",
    textBlue: "#1F668E",
    blue: "#0085FF",
  };
  const darkTheme = {
    bg: "#000",
    primary: "#fff",
    secondary: "#fff",
    textBlue: "#8EAEC0",
    blue: "#0085FF",
  };
  return (
    <GlobalContext.Provider value={globalState}>
      <ThemeProvider
        theme={
          theme === "light"
            ? lightTheme
            : theme === "dark"
            ? darkTheme
            : undefined
        }
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
