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

import { NavBar, MenuList, BackgroundImage } from "@/components";

import backgroundImageSrc from "public/images/monika-grabkowska-unsplash.jpg";

import styles from "@/styles/Menu.module.css";

export default function Menu() {
  return (
    <>
      <Head>
        <title>The Stuffed Potato - Menu</title>
      </Head>

      <NavBar />
      <main className={styles.menu}>
        <BackgroundImage src={backgroundImageSrc} alt="Potato salad" />

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
