import React, {createContext, useEffect, useState} from 'react';
import RootLayout from "./layouts/RootLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import Home from "./pages/Home";
import ProductCategory from './pages/ProductCategory';
import {categoriesQuery, productByIdLoader, productsByCategoryLoader} from "./lib/api/queriesLoader";
import {Category} from "./lib/types/types";
import Product from "./pages/Product";

export interface AppContextType {
    categories: Category[];
}

export const AppContext = createContext<AppContextType | null>(null);
const App = () => {
    const queryClient = useQueryClient();
    const { data: categoryStrings, error, isLoading = false } = useQuery(categoriesQuery());
    const [categories, setCategories] = useState<Category[]>([]);

    const buildCategories = () => {
        const categoryMap = {
            electronics: 'Electronics',
            "men's clothing": 'Men',
            "women's clothing": 'Women',
            jewelery: "Jewelery"
        }
        const cats: Category[] = categoryStrings.map((item) => {
            return {
                name: categoryMap[item],
                alias: item,
                imageLink: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        });

        setCategories(cats);
    }

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <RootLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: 'category/:categoryName',
                        element: <ProductCategory />,
                        loader: productsByCategoryLoader(queryClient),
                    },
                    {
                        path: 'product/:id',
                        element: <Product />,
                        loader: productByIdLoader(queryClient),
                    },
                ]
            }
        ]
    );

    useEffect(() => {
        if(!isLoading && !error)
            buildCategories();
    }, [isLoading, error]);

    if (isLoading) return null;
    if (error) return 'Error element';

  return (
      <AppContext.Provider value={{ categories }} >
          <RouterProvider router={router} />
      </AppContext.Provider>
  );
}

export default App
