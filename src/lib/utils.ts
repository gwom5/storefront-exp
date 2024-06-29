import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapCategoryToRequest (category: string): string {
  const categoriesMap = {
    Electronics: "electronics",
    Jewelery: 'jewelery',
    Men: "men's clothing",
    Women: "women's clothing",
  };

  return categoriesMap[category] || '';
}
