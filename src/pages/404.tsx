import Head from "next/head";

import { NavBar } from "@/components";

import styles from "@/styles/404.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
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
