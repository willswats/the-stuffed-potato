import { IMenuListItem } from "./menu";

const menuClassicJacketPotatoPricesOne = [
  {
    title: "Junior",
    price: 5.9,
  },
  {
    title: "Large",
    price: 7.6,
  },
];

const menuClassicJacketPotatoPricesTwo = [
  {
    title: "Junior",
    price: 6.1,
  },
  {
    title: "Large",
    price: 7.6,
  },
];

export const menuClassicJacketPotato: IMenuListItem[] = [
  {
    title: "Roast Chicken Dinner",
    description:
      "Roast chicken breast served with mixed veg, stuffing balls and gravy",
    prices: menuClassicJacketPotatoPricesOne,
    available: true,
  },
  {
    title: "Cola Gammon (Gravy or BBQ Sauce)",
    description: "Gammon boiled in cola served with either BBQ sauce or gravy.",
    prices: menuClassicJacketPotatoPricesOne,
    available: true,
  },
  {
    title: "BBQ Chicken",
    prices: menuClassicJacketPotatoPricesOne,
    available: true,
  },
  {
    title: "Vegan Cauliflower and Chickpea Curry",
    prices: menuClassicJacketPotatoPricesOne,
    available: true,
  },
  {
    title: "Bolognese",
    prices: menuClassicJacketPotatoPricesOne,
    available: true,
  },
  {
    title: "Cauliflower Cheese",
    description: "Homemade cauliflower cheese",
    prices: menuClassicJacketPotatoPricesTwo,
    available: true,
  },
  {
    title: "Vegetarian Chinese Style Curry",
    description:
      "Vegetarian Chinese style curry with sweet potatoes, carrots and peas",
    prices: menuClassicJacketPotatoPricesTwo,
    available: true,
  },
];
