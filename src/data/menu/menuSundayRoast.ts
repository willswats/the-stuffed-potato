import { IMenuListItem } from "./menu";

const menuSundayRoastPrices = [
  {
    title: "Kids Roast",
    price: 10.45,
  },
  {
    title: "Adults Roast",
    price: 14.95,
  },
];

export const menuSundayRoast: IMenuListItem[] = [
  {
    title: "Roasted Chicken Breast",
    description:
      "Roasted chicken breast served with roast potatoes, Yorkshire pudding, vegetables and a choice of sauce",
    prices: menuSundayRoastPrices,
    available: false,
  },
  {
    title: "Carved Beef Roast",
    description:
      "Carved beef served with roast potatoes, Yorkshire pudding, vegetables and a choice of sauces",
    prices: menuSundayRoastPrices,
    available: false,
  },
  {
    title: "Gammon Roast",
    description:
      "Gammon served with roast potatoes, Yorkshire pudding, vegetables and a choice of sauces",
    prices: menuSundayRoastPrices,
    available: true,
  },
  {
    title: "Lamb Roast",
    description:
      "Lamb served with roast potatoes, Yorkshire pudding, vegetables and a choice of sauces",
    prices: menuSundayRoastPrices,
    available: false,
  },
  {
    title: "Roast Pork",
    description:
      "Roast Pork served with roast potatoes, Yorkshire pudding, vegetables and a choice of sauces",
    prices: menuSundayRoastPrices,
    available: false,
  },
];
