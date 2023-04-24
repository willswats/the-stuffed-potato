import { IMenuListItem } from "@/data/menu/menu";

import styles from "./styles.module.css";

export const MenuListItem = ({
  title,
  description,
  price,
  prices,
  available,
}: IMenuListItem) => {
  return (
    <div
      className={`${styles["menu-list-item"]} ${
        !available ? styles["menu-list-item--unavailable"] : ""
      }`}
    >
      <h2>
        {title}
        {!available ? " - Unavailable" : ""}
      </h2>
      {description && (
        <p className={styles["menu-list-item__description"]}>{description}</p>
      )}
      {price && <p className={styles["menu-list-item__price"]}>£{price}</p>}
      {prices &&
        prices.map((price, index) => {
          return (
            <div key={index}>
              <p className={styles["menu-list-item__price"]}>
                {price.title}: £{price.price}
              </p>
            </div>
          );
        })}
    </div>
  );
};
