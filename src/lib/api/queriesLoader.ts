import {QueryClient} from '@tanstack/react-query';
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
        try {
            return await fetchProductById(id);
        } catch (e) {
            throw new Error(e);
        }
    }
})

export const productsByCategoryQuery = (category: string) => {
    const categoryName = mapCategoryToRequest(category);

    return {
        queryKey: ['categoryProducts', categoryName],
        queryFn: async () => await fetchProductsByCategory(categoryName)
    }
}

export const productByIdLoader = (queryClient: QueryClient) => async ({params}: LoaderFunctionArgs) => {
    const { id } = params;
    if(!id) throw new Response('No id provided', { status: 400, statusText: 'Id was not provided' });

    try {
        return await queryClient.ensureQueryData(productByIdQuery(id));
    } catch (error) {
        if (error instanceof Error) {
            throw new Response(error.message, { status: 400, statusText: 'Not found'});
        }

        throw error;
    }
}

export const productsByCategoryLoader = (queryClient: QueryClient) => async ({params}: LoaderFunctionArgs) => {
    if(!params.categoryName) throw new Error('No category name');
    return await queryClient.ensureQueryData(productsByCategoryQuery(params.categoryName));
}

