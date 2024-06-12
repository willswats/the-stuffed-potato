import Head from "next/head";

import { LinkButton } from "@/components";

import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.home}>
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
