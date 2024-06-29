import {QueryClient, queryOptions} from '@tanstack/react-query';
import {fetchCategories, fetchProductById, fetchProductsByCategory} from './fetchData';
import { LoaderFunctionArgs } from 'react-router-dom';
import { mapCategoryToRequest } from '../utils';

export const categoriesQuery = () => ({
    queryKey: ['categories'],
    queryFn: async () => fetchCategories(),
});


export const productByIdQuery = (id: number) => ({
    queryKey: ['product', id],
    queryFn: async () => {
        const product = await fetchProductById(id);
        if (!product) throw new Error('Product not found');

        return product
    }
})

export const productsByCategoryQuery = (category: string) => {
    const categoryName = mapCategoryToRequest(category);

    return {
        queryKey: ['categoryProducts', categoryName],
        queryFn: async () => await fetchProductsByCategory(categoryName)
}}

export const productByIdLoader = (queryClient: QueryClient) => async ({params}: LoaderFunctionArgs) => {
    const { id } = params;
    if(!id) throw new Error('No id provided');
    return await queryClient.ensureQueryData(productByIdQuery(id));
}

export const productsByCategoryLoader = (queryClient: QueryClient) => async ({params}: LoaderFunctionArgs) => {
    if(!params.categoryName) throw new Error('No category name');
    return await queryClient.ensureQueryData(productsByCategoryQuery(params.categoryName));
}

