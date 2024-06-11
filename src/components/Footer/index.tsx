import styles from "./styles.module.css";

import SvgGitHub from "/github-fill.svg";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a
        className={styles["link"]}
        href="https://github.com/willswats/react-calculator"
      >
        <SvgGitHub className={styles["svg"]} />
      </a>
      <a className={styles["link"]} href="https://williamwatson.dev">
        williamwatson.dev
      </a>
    </footer>
  );
};
