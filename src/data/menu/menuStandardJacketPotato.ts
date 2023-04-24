import { IMenuListItem } from "./menu";

const menuStandardJacketPotatoPrices = [
  {
    title: "Junior",
    price: 5.4,
  },
  {
    title: "Large",
    price: 6.6,
  },
];

export const menuStandardJacketPotato: IMenuListItem[] = [
  {
    title: "Plain Plus Butter",
    prices: menuStandardJacketPotatoPrices,
    available: true,
  },
  {
    title: "Cottage Cheese",
    prices: menuStandardJacketPotatoPrices,
    available: true,
  },
  {
    title: "Coleslaw",
    description: "Polish style cabbage salad (coleslaw with no mayo)",
    prices: menuStandardJacketPotatoPrices,
    available: true,
  },
  {
    title: "Beans",
    prices: menuStandardJacketPotatoPrices,
    available: true,
  },
  {
    title: "Cheese",
    prices: menuStandardJacketPotatoPrices,
    available: true,
  },
];
