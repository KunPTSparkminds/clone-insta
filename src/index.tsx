import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { ConfigProvider } from "antd";
import { LoadingProvider } from "./config/loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const theme = localStorage.getItem("product-theme") || "light";

root.render(
  <ConfigProvider theme={{ hashed: false }}>
    <BrowserRouter>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={theme}>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </ThemeSwitcherProvider>
    </BrowserRouter>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
