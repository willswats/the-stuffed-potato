import Head from "next/head";

import { NavBar } from "@/components";

import styles from "@/styles/404.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The Stuffed Potato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <NavBar />
      <main className={styles["four-zero-four"]}>
        <h1 className={styles["four-zero-four__title"]}>
          404 - Page Not Found
        </h1>
      </main>
    </>
  );
}
