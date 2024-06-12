import Head from "next/head";

import { LinkButton } from "@/components";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato</title>
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
      <main className={styles.home}>
        <h1 className={styles.home__title}>The Stuffed Potato</h1>
        <p className={styles.home__address}>133 Example, Example City</p>
        <p className={styles.home__phone}>(123) 456-7890</p>
        <p className={styles.home__open}>Open Mon-Sat 11am-8pm</p>
        <div className={styles["home__button-links"]}>
          <LinkButton href="/menu" text="View the menu" />
          <LinkButton href="/order" text="Choose where to order" />
        </div>
      </main>
    </>
  );
}
