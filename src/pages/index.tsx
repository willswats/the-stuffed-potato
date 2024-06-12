import Head from "next/head";

import { LinkButton, Footer } from "@/components";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato</title>
      </Head>
      <main className={styles.home}>
        <section className={styles.home__content}>
          <h1 className={styles.home__title}>The Stuffed Potato</h1>
          <p className={styles.home__address}>133 Example, Example City</p>
          <p className={styles.home__phone}>(123) 456-7890</p>
          <p className={styles.home__open}>Open Mon-Sat 11am-8pm</p>
          <div className={styles["home__button-links"]}>
            <LinkButton href="/menu" text="View the menu" />
            <LinkButton href="/order" text="Choose where to order" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
