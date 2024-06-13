import Head from "next/head";

import SvgDeliveroo from "public/svgs/deliveroo.svg";
import SvgJustEat from "public/svgs/just-eat.svg";

import { NavBar, LinkButtonSvg, BackgroundImage } from "@/components";

import backgroundImageSrc from "public/images/jarritos-mexican-soda-unsplash-potato.jpg";

import styles from "@/styles/Order.module.css";

export default function Order() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato - Order</title>
      </Head>

      <main className={styles.order}>
        <BackgroundImage src={backgroundImageSrc} alt="A jacket potato" />
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
      </main>
    </>
  );
}
