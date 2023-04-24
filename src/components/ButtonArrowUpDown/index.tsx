import SvgArrowUp from "../../../public/arrow-up.svg";
import SvgArrowDown from "../../../public/arrow-down.svg";

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
