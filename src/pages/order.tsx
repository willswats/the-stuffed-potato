import Head from "next/head";

import SvgDeliveroo from "../../public/deliveroo.svg";
import SvgJustEat from "../../public/just-eat.svg";

import { NavBar, LinkButtonSvg } from "@/components";

import styles from "@/styles/Order.module.css";
import { Footer } from "@/components/Footer";

export default function Order() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato - Order</title>
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

      <main className={styles.main}>
        <section className={styles.order}>
          <NavBar />
          <div className={styles["order__link-button-svgs"]}>
            <LinkButtonSvg
              url="https://deliveroo.co.uk/"
              svgComponent={<SvgDeliveroo />}
            />
            <LinkButtonSvg
              url="https://www.just-eat.co.uk/"
              svgComponent={<SvgJustEat />}
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
