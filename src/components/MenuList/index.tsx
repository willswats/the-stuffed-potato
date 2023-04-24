import { useState } from "react";

import { IMenuListItem } from "@/data/menu/menu";

import { MenuListItem, ButtonArrowUpDown } from "@/components";

import styles from "./styles.module.css";

interface MenuListProps {
  title: string;
  menuList: IMenuListItem[];
}

export const MenuList = ({ title, menuList }: MenuListProps) => {
  const [menuListHidden, setMenuListHidden] = useState(true);

  const handleHideClick = () => {
    !menuListHidden ? setMenuListHidden(true) : setMenuListHidden(false);
  };

  return (
    <div className={styles["menu-list"]}>
      <div className={styles["menu-list__top"]}>
        <h1 className={styles["menu-list__top-title"]}>{title}</h1>
        <ButtonArrowUpDown
          menuListHidden={menuListHidden}
          handleButtonArrowUpDownClick={handleHideClick}
        />
      </div>
      {menuList.map((item, index) => {
        if (!menuListHidden) {
          return (
            <MenuListItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              prices={item.prices}
              available={item.available}
            />
          );
        }
      })}
    </div>
  );
};
