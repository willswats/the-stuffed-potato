import styles from "./styles.module.css";

import { SvgGitHubFill } from "@/components";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a
        href="https://github.com/willswats/the-stuffed-potato"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgGitHubFill />
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
