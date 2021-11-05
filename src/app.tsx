import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AOS from "aos";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./routes/Router";
import "normalize.css/normalize.css";
import "./scss/styles.scss";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "animate.css/animate.min.css";
import withLoading from "./utils/components/withLoading";
import "aos/dist/aos.css";

const App = (): JSX.Element => {
  AOS.init();
  const [isLoading, setLoading] = useState(true);
  const RouterWithLoading = withLoading(AppRouter);

  const handleFirstTab = (e): void => {
    if (e.keyCode === 9) {
      // the "I am a keyboard user" key
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
    }
  };

  useEffect((): (() => void) => {
    window.addEventListener("keydown", handleFirstTab);
    return (): void => {
      window.addEventListener("keydown", handleFirstTab);
    };
  }, []);

  useEffect((): void => {
    if (isLoading) {
      setTimeout((): void => {
        setLoading(false);
      }, 300);
    }
  });

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#fff",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterWithLoading loading={isLoading} />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
