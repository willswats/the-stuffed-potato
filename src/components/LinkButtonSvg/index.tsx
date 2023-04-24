import styles from "./styles.module.css";

interface LinkButtonSvgProps {
  url: string;
  svgComponent: JSX.Element;
}

export const LinkButtonSvg = ({ url, svgComponent }: LinkButtonSvgProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={url}
      className={styles["link-button-svg"]}
    >
      {svgComponent}
    </a>
  );
};
