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
