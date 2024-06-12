import styles from "./styles.module.css";

import SvgGitHub from "public/svgs/github-fill.svg";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a
        href="https://github.com/willswats/the-stuffed-potato"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgGitHub />
      </a>
      <a
        href="https://williamwatson.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        williamwatson.dev
      </a>
    </footer>
  );
};
