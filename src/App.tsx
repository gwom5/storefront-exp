import React from 'react';
import RootLayout from "./layouts/RootLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from './pages/ProductCategory';

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
                    path: 'category/*',
                    element: <ProductCategory />,
                },
            ]
        }
    ]
);
const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
