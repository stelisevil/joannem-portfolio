import React from "react";
import TopNav from "../components/TopNav";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <TopNav />
    <Component {...pageProps} />
  </>
);

export default MyApp;
