import axios from "axios";
import {Product} from "../types/types";

export const fetchCategories = async (): Promise<string[]> => {
    const response = await axios.get<string[]>('https://fakestoreapi.com/products/categories');
    if (!response.data) {
        throw new Error('Network response was not ok');
    }

    return response.data as string[];
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.data) {
        throw new Error('Network response was not ok');
    }

    return response.data as Product[];
}

export const fetchProductById = async (id: number): Promise<Product> => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    if (!response.data) {
        throw new Error('Network response was not ok');
    }

    return response.data as Product;
}
