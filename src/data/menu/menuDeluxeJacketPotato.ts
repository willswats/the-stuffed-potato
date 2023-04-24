import { IMenuListItem } from "./menu";

const menuDeluxeJacketPotatoPrices = [
  {
    title: "Junior",
    price: 6.3,
  },
  {
    title: "Large",
    price: 8.8,
  },
];

export const menuDeluxeJacketPotato: IMenuListItem[] = [
  {
    title: "Tuna Mayo",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Chicken Katsu Curry",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Chicken Indian Curry",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Pork Goulash",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Chilli Con Carne (Sour Cream and Jalapenos)",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Homemade Swedish Meatballs in Gravy",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Thai Green Curry",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Meatball Marinara",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Vegan Spanish Bean and Chorizo Sausage Stew",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Spanish Bean and Chorizo Stew",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
  {
    title: "Vegetable/Vegan Chilli Con Carne - Large",
    prices: [
      {
        title: "Large",
        price: 6.3,
      },
    ],
    available: true,
  },
  {
    title: "Chinese Chicken Curry with Carrots and Peas",
    prices: [
      ...menuDeluxeJacketPotatoPrices,
      {
        title: "Cheese",
        price: 1,
      },
    ],
    available: true,
  },
  {
    title: "Sweet and Sour Chinese Chicken",
    prices: menuDeluxeJacketPotatoPrices,
    available: true,
  },
];
