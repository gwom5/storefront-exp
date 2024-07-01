export interface Category {
    name: string;
    alias: string;
    imageLink: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number }
}

export interface Cart {
    id: number | null;
    userId: number | null;
    date: string;
    products: {
        product: Product;
        quantity: number;
    }[];
}

export interface User {
    id: number;
    email: string;
}
