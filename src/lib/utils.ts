import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {Cart} from "./types/types";
import electronicsImage from "../assets/images/pexels-padrinan-343457.jpg";
import menImage from "../assets/images/pexels-gabby-k-6310924.jpg";
import womenImage from "../assets/images/pexels-godisable-jacob-226636-794062.jpg";
import jeweleryImage from "../assets/images/pexels-dima-valkov-1186343-3266700.jpg";

export const categoryMap: {[key: string]: {[key: string]: string}} = {
  electronics: {
    name: 'Electronics',
    alias: 'electronics',
    imageLink: electronicsImage
  },
  "men's clothing": {
    name: 'Men',
    alias: "men's clothing",
    imageLink: menImage,
  },
  "women's clothing": {
    name: 'Women',
    alias: "women's clothing",
    imageLink: womenImage,
  },
  jewelery: {
    name: 'Jewelery',
    alias: 'jewelery',
    imageLink: jeweleryImage
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapCategoryToRequest (category: string): string {
  const categoriesMap = {
    electronics: "electronics",
    jewelery: 'jewelery',
    men: "men's clothing",
    women: "women's clothing",
  };

  return categoriesMap[category.toLowerCase()] || '';
}

export const loadCartFromLocalStorage = (): Cart | null => {
  const cartJSON = localStorage.getItem('cart');
  return cartJSON ? JSON.parse(cartJSON) : null;
};

export const saveCartToLocalStorage = (cart: Cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};
