import { SvgArrowUp, SvgArrowDown } from "@/components";

import styles from "./styles.module.css";

interface ButtonArrowUpDownProps {
  menuListHidden: boolean;
  handleButtonArrowUpDownClick: () => void;
}

export const ButtonArrowUpDown = ({
  menuListHidden,
  handleButtonArrowUpDownClick,
}: ButtonArrowUpDownProps) => {
  return (
    <button
      className={styles["button-arrow-up-down"]}
      onClick={handleButtonArrowUpDownClick}
    >
      {!menuListHidden ? <SvgArrowDown /> : <SvgArrowUp />}
    </button>
  );
};
