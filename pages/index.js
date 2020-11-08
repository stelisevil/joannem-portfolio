import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Work from "./work";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joanne McGarvie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Joanne McGarvie</h1>
        <Work />
      </main>
    </div>
  );
};

export default Home;
