import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

import styles from "./styles.module.css";

interface BackgroundImageProps {
  src: StaticImageData;
  alt: string;
  style?: CSSProperties;
}

export const BackgroundImage = ({ src, alt, style }: BackgroundImageProps) => {
  return (
    <Image
      className={styles["background-image"]}
      src={src}
      alt={alt}
      fill={true}
      priority={true}
      style={style}
    />
  );
};
