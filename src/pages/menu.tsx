import Head from "next/head";

import {
  menuClassicJacketPotato,
  menuDeluxeJacketPotato,
  menuDrinks,
  menuHomemadeBurgers,
  menuStandardJacketPotato,
  menuSundayRoast,
  menuSweets,
  menuZapiekanka,
} from "@/data/menu";

import { NavBar, MenuList } from "@/components";

import styles from "@/styles/Menu.module.css";

export default function Menu() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato - Menu</title>
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
      <main className={styles.menu}>
        <MenuList
          title="Standard Jacket Potato"
          menuList={menuStandardJacketPotato}
        />

        <MenuList
          title="Classic Jacket Potato"
          menuList={menuClassicJacketPotato}
        />

        <MenuList
          title="Deluxe Jacket Potato"
          menuList={menuDeluxeJacketPotato}
        />

        <MenuList title="Zapiekanka Jacket Potato" menuList={menuZapiekanka} />

        <MenuList title="Homemade Burgers" menuList={menuHomemadeBurgers} />

        <MenuList title="Drinks" menuList={menuDrinks} />

        <MenuList title="Sweets" menuList={menuSweets} />

        <MenuList
          title="Sunday Roast - Sunday Only, From 12:00"
          menuList={menuSundayRoast}
        />
      </main>
    </>
  );
}
