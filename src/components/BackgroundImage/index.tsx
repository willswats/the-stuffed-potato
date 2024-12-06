import Image from "next/image";

import styles from "./styles.module.css";

interface BackgroundImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const BackgroundImage = ({
  src,
  width,
  height,
  alt,
}: BackgroundImageProps) => {
  return (
    <Image
      className={styles["background-image"]}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={true}
    />
  );
};
