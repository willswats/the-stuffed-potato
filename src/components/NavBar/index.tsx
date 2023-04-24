import { NavBarLink } from "@/components/NavBarLink";

import styles from "./styles.module.css";

export const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <NavBarLink url="/" text="Home" />
      <NavBarLink url="/menu" text="Menu" />
      <NavBarLink url="/order" text="Order" />
    </nav>
  );
};
