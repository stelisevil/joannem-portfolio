import React from "react";
import TopNav from "../components/TopNav";
import "../styles/globals.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <TopNav />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
