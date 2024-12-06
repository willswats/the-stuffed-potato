import Head from "next/head";

import {
  NavBar,
  LinkButtonSvg,
  BackgroundImage,
  SvgDeliveroo,
  SvgJustEat,
} from "@/components";

import styles from "@/styles/Order.module.css";

export default function Order() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato - Order</title>
      </Head>

      <main className={styles.order}>
        <BackgroundImage
          src="/images/jarritos-mexican-soda-unsplash-potato.jpg"
          width={3840}
          height={5760}
          alt="A jacket potato"
        />
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
