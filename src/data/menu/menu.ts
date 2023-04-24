export interface IMenuListItem {
  title: string;
  description?: string;
  price?: number;
  prices?: {
    title: string;
    price: number;
  }[];
  available: boolean;
}
