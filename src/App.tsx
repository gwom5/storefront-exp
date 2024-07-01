import React from 'react';
import RootLayout from "./layouts/RootLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from './pages/ProductCategory';
import {productByIdLoader, productsByCategoryLoader} from "./lib/api/queriesLoader";
import Product from "./pages/Product";
import AppProvider from "./lib/providers/AppProvider";
import CartProvider from "./lib/providers/CartProvider";
import ErrorPage from "./pages/ErrorPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 10,
        }
    }
});

const App = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <RootLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: 'category/:categoryName',
                        element: <ProductCategory />,
                        loader: productsByCategoryLoader(queryClient),
                        errorElement: <ErrorPage />,
                    },
                    {
                        path: 'product/:id',
                        element: <Product />,
                        loader: productByIdLoader(queryClient),
                        errorElement: <ErrorPage />,
                    },
                    {
                        path: '*',
                        element: <ErrorPage />
                    }
                ]
            }
        ]
    );

  return (
      <QueryClientProvider client={queryClient}>
          <AppProvider>
              <CartProvider>
                  <RouterProvider router={router} />
              </CartProvider>
          </AppProvider>
      </QueryClientProvider>
  );
}

export default App
